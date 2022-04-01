import { Component, OnInit } from '@angular/core';
import { Category } from "../shared/models/category";
import { ApiService } from "../shared/services/api.service";
import { QuestionTypeEnum } from "../shared/enums/question-type.enum";
import { TypedFormGroup } from "../shared/utils/typed-form-group";
import { TestAnswers } from "../shared/models/test-answers";
import { FormArray, FormControl } from "@angular/forms";
import { Answer } from "../shared/models/answer";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  activeStepIdx = 0;
  answers = [
    { text: 'Strongly disagree', className: 'danger' },
    { className: 'semi-danger' },
    { text: 'Neutral', className: 'warning' },
    { className: 'semi-success' },
    { text: 'Strongly disagree', className: 'success' },
  ];
  inputs = [
    { label: 'First name', id: 'firstName' },
    { label: 'Last name', id: 'lastName' },
    { label: 'Email', id: 'email' },
    { label: 'Title', id: 'title' },
    { label: 'Company name', id: 'companyName' },
    { label: 'Industry', id: 'industry' },
    { label: 'Company size', id: 'companySize' },
  ];
  categories?: Category[];
  questionTypes = QuestionTypeEnum;
  isLoading = true;
  form?: TypedFormGroup<TestAnswers>;
  result = 0;
  total = 0;

  constructor(private apiService: ApiService) {
  }

  get prevStepTitle(): string {
    return this.categories![this.activeStepIdx - 1].title;
  }

  ngOnInit(): void {
    this.getTestData();
  }

  initForm(categories: Category[]): void {
    this.form = new TypedFormGroup<TestAnswers>({
      answers: new FormArray(
        categories.map(category => new FormArray(
            category.questions.map((question) => {
                const controls: TypedFormGroup<Answer>['controls'] = {};
                switch (question.questionType) {
                  case QuestionTypeEnum.Agree:
                    controls.score = new FormControl(0);
                    break;
                  case QuestionTypeEnum.FreeText:
                    controls.freeText = new FormControl('');
                    break;
                }
                return new TypedFormGroup<Answer>(controls)
              }
            )
          )
        )
      )
    })
  }

  getTestData(): void {
    this.isLoading = true;
    this.apiService.getTestData()
      .subscribe(value => {
        this.categories = value;
        this.initForm(this.categories);
        this.isLoading = false;
      })
  }

  getStepProgressWidthByIdx(i: number): string | number {
    if (!this.form) {
      return 0;
    }
    const questions = ((this.form.controls.answers as FormArray)
      .controls[i] as FormArray)
      .controls;
    const answeredQuestionsCount =
      questions
        // @ts-ignore
        .filter((question: TypedFormGroup<Answer>) =>
          question.value.score || question.value.freeText
        ).length
    return answeredQuestionsCount / questions.length * 100 + '%';
  }

  submitStep(): void {
    if (!this.categories) {
      return
    }
    const stepsLength = this.categories?.length;
    if (this.activeStepIdx === stepsLength - 1) {
      this.submit();
    } else {
      this.goToStep(this.activeStepIdx + 1);
    }
  }

  submit(): void {
    if (!this.form || !this.categories) {
      return;
    }
    this.isLoading = true;

    // Calculate result
    this.total = this.categories.reduce((acc, category) => {
      acc += category.questions.filter(question => question.questionType === QuestionTypeEnum.Agree).length * 5;
      return acc;
    }, 0);
    // @ts-ignore
    this.result = (this.form.controls.answers as FormArray)
      .controls
      // @ts-ignore
      .reduce((acc, category: FormArray, ci) => {
        // @ts-ignore
        acc += category.controls.reduce((catAcc, answer: TypedFormGroup<Answer>, i) => {
          const question = this.categories![ci].questions[i];
          const score = answer.value.score || 0;
          catAcc += score ? 5 - (question.score || 5) + score : 0;
          return catAcc;
        }, 0)
        return acc;
      }, 0);

    this.isLoading = false;
  }

  backStep(): void {
    if (!this.activeStepIdx) {
      return;
    }
    this.goToStep(this.activeStepIdx - 1);
  }

  goToStep(i: number) {
    if (this.activeStepIdx === i) {
      return;
    }
    this.activeStepIdx = i;
    window.scrollTo(0, 0);
  }
}

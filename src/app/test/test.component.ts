import { Component, OnInit } from '@angular/core';
import { Category } from "../shared/models/category";
import { ApiService } from "../shared/services/api.service";
import { QuestionTypeEnum } from "../shared/enums/question-type.enum";
import { TypedFormArray, TypedFormGroup } from "../shared/utils/typed-form-group";
import { TestAnswers } from "../shared/models/test-answers";
import { FormControl } from "@angular/forms";
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
    { text: 'Strongly agree', className: 'success' },
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
      answers: new TypedFormArray<TestAnswers['answers']>(
        categories.map(category => new TypedFormArray<TestAnswers['answers'][0]>(
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
    const questions = ((this.form.controls.answers as TypedFormArray<TestAnswers['answers']>)
      .controls[i] as TypedFormArray<TestAnswers['answers'][0]>)
      .controls;
    const answeredQuestionsCount =
      questions
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
    this.result = (this.form.controls.answers as TypedFormArray<TestAnswers['answers']>)
      .controls
      .reduce((acc, category, ci) => {
        acc += (category as TypedFormArray<TestAnswers['answers'][0]>).controls.reduce((catAcc, answer, i) => {
          const question = this.categories![ci].questions[i];
          const score = answer.value.score || 0;
          catAcc += score ? Math.abs(score - (question.agree ? 0 : 6)) : 0;
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

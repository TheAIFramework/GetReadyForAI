import { Component, OnInit } from '@angular/core';
import { Category } from "@shared/models/category";
import { ApiService } from "@shared/services/api.service";
import { QuestionTypeEnum } from "@shared/enums/question-type.enum";
import { TypedFormArray, TypedFormGroup } from "@shared/utils/typed-form-group";
import { TestAnswers } from "@shared/models/test-answers";
import { FormControl } from "@angular/forms";
import { Answer } from "@shared/models/answer";
import { AppService } from "@shared/services/app.service";
import { finalize, take } from "rxjs";
import { Router } from "@angular/router";

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

  constructor(private apiService: ApiService, private appService: AppService, private router: Router) {
  }

  get prevStepTitle(): string {
    return this.categories![this.activeStepIdx - 1].title;
  }

  ngOnInit(): void {
    this.getTestData();
  }

  initForm(categories: Category[]): void {
    this.form = new TypedFormGroup<TestAnswers>({
      answers: new TypedFormArray<Answer[]>(
        categories.map(category => new TypedFormArray<Answer>(
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
    });

    this.appService.answers$.pipe(take(1)).subscribe(value => this.form?.patchValue(value || {}))

    this.form.valueChanges.subscribe(value => this.appService.setAnswers(value));
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
    const questions = ((this.form.controls.answers as TypedFormArray<Answer[]>)
      .controls[i] as TypedFormArray<Answer>)
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
    this.apiService.submitAnswers(this.form.value)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(() => {
        this.router.navigateByUrl('/test/result');
      })
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

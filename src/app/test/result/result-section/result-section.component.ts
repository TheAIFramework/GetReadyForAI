import { Component, OnInit } from '@angular/core';
import { ApiService } from "@shared/services/api.service";
import { Category } from "@shared/models/category";
import Chart, { ChartItem } from "chart.js/auto";
import { QuestionTypeEnum } from "@shared/enums/question-type.enum";
import { AppService } from "@shared/services/app.service";
import { filter, forkJoin, take } from "rxjs";
import { TestAnswers } from "@shared/models/test-answers";

interface ExtendedCategory extends Category {
  score: number;
}

@Component({
  selector: 'app-result-section',
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.scss']
})
export class ResultSectionComponent implements OnInit {
  total = 0;
  score = 0;

  constructor(private apiService: ApiService, private appService: AppService) {
  }

  ngOnInit(): void {
    forkJoin([
      this.apiService.getTestData(),
      this.appService.answers$.pipe(filter(Boolean), take(1))
    ]).subscribe(([categories, answers]) => this.calculateResult(categories, answers))
  }

  calculateResult(categories: Category[], testAnswers: TestAnswers): void {
    const categoriesTotals = categories.map(category => category.questions.filter(question => question.questionType === QuestionTypeEnum.Agree).length * 5);
    this.total = categories.length * 50;
    const categoriesScores = testAnswers.answers
      .map((category, ci) =>
        Math.round(category.reduce((catAcc, answer, i) => {
          const question = categories![ci].questions[i];
          const score = answer.score || 0;
          catAcc += score ? Math.abs(score - (question.agree ? 0 : 6)) : 0;
          return catAcc;
        }, 0) * 50 / categoriesTotals[ci])
      );
    this.score = categoriesScores.reduce((acc, categoriesScore) => {
      acc += categoriesScore;
      return acc;
    }, 0);
    this.buildChart(categories.map((category, i) => ({ ...category, score: categoriesScores[i] })));
  }

  buildChart(categories: ExtendedCategory[]): void {
    const ctx = document.getElementById('myChart') as ChartItem;
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: categories.map(x => x.title),
        datasets: [{
          data: categories.map(x => x.score),
          fill: true,
          backgroundColor: 'rgba(208, 215, 221, 0.5)',
          borderColor: 'rgb(208, 215, 221)',
          borderWidth: 2,
          pointRadius: 5,
          pointBorderWidth: 0,
          pointBackgroundColor: categories.map(x => this.getScoreColor(x.score)),
          pointHoverBackgroundColor: '#fff',
        }]
      },
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          r: {
            min: 0,
            max: 50,
            ticks: {
              stepSize: 10,
              color: 'black',
              font: {
                size: 8
              },
            },
            grid: {
              color: 'black',
            },
            angleLines: {
              color: 'black',
            },
            pointLabels: {
              font: {
                size: 16,
                weight: 'bold'
              }
            }
          }
        }
      },
    });
  }

  getScoreColor(score: number): string {
    if (score >= 40) {
      return '#22AF49';
    }
    if (score >= 30) {
      return '#A8BF19';
    }
    if (score >= 20) {
      return '#FFF500';
    }
    if (score >= 10) {
      return '#FF9D47';
    }
    return '#FF4740'
  }
}

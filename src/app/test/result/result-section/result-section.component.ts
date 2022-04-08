import { Component, OnInit } from '@angular/core';
import { ApiService } from "@shared/services/api.service";
import { Category } from "@shared/models/category";
import Chart, { ChartItem } from "chart.js/auto";

@Component({
  selector: 'app-result-section',
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.scss']
})
export class ResultSectionComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getTestData().subscribe(categories => this.buildChart(categories))
  }

  buildChart(categories: Category[]): void {
    const ctx = document.getElementById('myChart') as ChartItem;
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: categories.map(x => x.title),
        datasets: [{
          data: [40, 50, 30, 40, 10, 30],
          fill: true,
          backgroundColor: 'rgba(208, 215, 221, 0.5)',
          borderColor: 'rgb(208, 215, 221)',
          borderWidth: 2,
          pointRadius: 5,
          pointBorderWidth: 0,
          pointBackgroundColor: '#22AF49',
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
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  steps = ['Strategy / Business Model', 'People', 'Data', 'Technology', 'Tactics / Operations Model', 'Cross-Functional Abilities'];
  activeStepIdx = 3;
  activeQuestionNo = 3;
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

  constructor() {
  }

  ngOnInit(): void {
  }

  getStepProgressWidthByIdx(i: number): string {
    if (i < this.activeStepIdx) {
      return '100%';
    }
    if (i === this.activeStepIdx) {
      return this.activeQuestionNo / 10 * 100 + '%';
    }
    return '0';
  }
}

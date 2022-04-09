import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { User } from "@shared/models/user";
import { TestAnswers } from "@shared/models/test-answers";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private userInfo = new BehaviorSubject<User | undefined>(undefined);
  userInfo$ = this.userInfo.asObservable();
  private answers = new BehaviorSubject<TestAnswers | undefined>(undefined);
  answers$ = this.answers.asObservable();

  constructor() {
    const user = localStorage.getItem('AI_user');
    if (user) {
      this.userInfo.next(JSON.parse(user));
    }
    const answers = localStorage.getItem('AI_answers');
    if (answers) {
      this.answers.next(JSON.parse(answers));
    }
  }

  setUserInfo(user: User): void {
    localStorage.setItem('AI_user', JSON.stringify(user));
    this.userInfo.next(user);
  }

  setAnswers(answers: TestAnswers): void {
    localStorage.setItem('AI_answers', JSON.stringify(answers));
    this.answers.next(answers);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { User } from "@shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private userInfo = new BehaviorSubject<User | undefined>(undefined);
  userInfo$ = this.userInfo.asObservable();

  constructor() {
    const user = localStorage.getItem('AI_user');
    if (user) {
      this.userInfo.next(JSON.parse(user));
    }
  }

  setUserInfo(user: User): void {
    localStorage.setItem('AI_user', JSON.stringify(user));
    this.userInfo.next(user);
  }
}

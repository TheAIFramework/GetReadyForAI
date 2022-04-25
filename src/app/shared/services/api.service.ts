import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { filter, forkJoin, Observable, shareReplay, switchMap, take } from "rxjs";
import { Category } from "../models/category";
import { TestAnswers } from "../models/test-answers";
import { Resource } from "@shared/models/resource";
import { Result } from "@shared/models/result";
import { environment } from "../../../environments/environment";
import { User } from "@shared/models/user";
import { FirebaseResponse } from "@shared/models/firebase-response";
import { AppService } from "@shared/services/app.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private testData$?: Observable<Category[]>;
  firebaseUrl = environment.firebase.databaseUrl;

  constructor(private http: HttpClient, private appService: AppService) {
  }

  getTestData(): Observable<Category[]> {
    if (!this.testData$) {
      this.testData$ = this.http.get<Category[]>('assets/data/test-data.json').pipe(shareReplay());
    }
    return this.testData$;
  }

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>('assets/data/resources.json');
  }

  getResults(): Observable<Result[]> {
    return this.http.get<Result[]>('assets/data/results.json');
  }

  saveUserData(user: User): Observable<FirebaseResponse> {
    return this.http.post<FirebaseResponse>(this.firebaseUrl + 'users.json', user);
  }

  updateUserData(userId: string, user: User): Observable<Partial<User>> {
    return this.http.put<Partial<User>>(this.firebaseUrl + `users/${userId}.json`, user);
  }

  submitAnswers({ answers }: TestAnswers): Observable<FirebaseResponse> {
    return forkJoin([
      this.appService.userInfo$.pipe(filter(Boolean), take(1)),
      this.getTestData()
    ]).pipe(switchMap(([{ id: userId, ...user }, categories]) =>
      this.http.put<FirebaseResponse>(this.firebaseUrl + `users/${userId}.json`,
        {
          ...user,
          time: new Date().toString(),
          answers: categories.map((category, ci) => ({
            category: category.title,
            questions: category.questions.map((question, qi) => ({
              ...question,
              ...answers[ci][qi]
            }))
          }))
        }
      )
    ))
  }
}

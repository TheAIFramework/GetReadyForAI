import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, shareReplay } from "rxjs";
import { Category } from "../models/category";
import { TestAnswers } from "../models/test-answers";
import { Resource } from "@shared/models/resource";
import { Result } from "@shared/models/result";
import { environment } from "../../../environments/environment";
import { User } from "@shared/models/user";
import { FirebaseResponse } from "@shared/models/firebase-response";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private testData$?: Observable<Category[]>;
  firebaseUrl = environment.firebase.databaseUrl;

  constructor(private http: HttpClient) {
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

  submitAnswers(answers: TestAnswers): Observable<FirebaseResponse> {
    return this.http.post<FirebaseResponse>(this.firebaseUrl + 'answers.json', answers);
  }
}

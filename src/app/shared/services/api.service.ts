import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, shareReplay } from "rxjs";
import { Category } from "../models/category";
import { TestAnswers } from "../models/test-answers";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private testData$?: Observable<Category[]>;

  constructor(private http: HttpClient) {
  }

  getTestData(): Observable<Category[]> {
    if (!this.testData$) {
      this.testData$ = this.http.get<Category[]>('assets/data/test-data.json').pipe(shareReplay());
    }
    return this.testData$;
  }

  submitAnswers(answers: TestAnswers) {

  }
}

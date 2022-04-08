import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../models/category";
import { TestAnswers } from "../models/test-answers";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getTestData(): Observable<Category[]> {
    return this.http.get<Category[]>('assets/data/test-data.json');
  }

  submitAnswers(answers: TestAnswers) {

  }
}

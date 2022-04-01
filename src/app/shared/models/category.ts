import { Question } from "./question";

export interface Category {
  title: string;
  questions: Question[];
}

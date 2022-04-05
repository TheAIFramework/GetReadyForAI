import { QuestionTypeEnum } from "../enums/question-type.enum";

export interface Question {
  question: string;
  questionType: QuestionTypeEnum;
  agree?: boolean;
}

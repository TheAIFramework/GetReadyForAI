import { TestBed } from '@angular/core/testing';

import { AnswersGuard } from './answers.guard';

describe('AnswersGuard', () => {
  let guard: AnswersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnswersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

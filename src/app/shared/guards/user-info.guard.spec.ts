import { TestBed } from '@angular/core/testing';

import { UserInfoGuard } from './user-info.guard';

describe('UserInfoGuard', () => {
  let guard: UserInfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserInfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

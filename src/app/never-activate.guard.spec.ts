import { TestBed, async, inject } from '@angular/core/testing';

import { NeverActivateGuard } from './never-activate.guard';

describe('NeverActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NeverActivateGuard]
    });
  });

  it('should ...', inject([NeverActivateGuard], (guard: NeverActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});

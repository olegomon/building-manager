import { TestBed } from '@angular/core/testing';

import { NicknameService } from './nickname.service';

describe('NicknameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NicknameService = TestBed.get(NicknameService);
    expect(service).toBeTruthy();
  });
});

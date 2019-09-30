import {TestBed} from '@angular/core/testing';
import {AsyncValidatorFn, FormControl, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';

import {NicknameService} from './nickname.service';
import {nicknameFormatValidator} from './nickname.validator';

describe('nicknameFormatValidator', () => {

  let service: NicknameService;
  let validator: AsyncValidatorFn;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: NicknameService, useClass: NicknameService}
      ]
    });
    service = TestBed.get(NicknameService);
    validator = nicknameFormatValidator(service, 1);
  });

  it('should return ValidationError if value of the AbstractControl does not starts with "a"', async () => {
    const control = new FormControl('');
    const validation$ = validator(control) as Observable<ValidationErrors | null>;
    const result = await validation$.toPromise();
    expect(result).toEqual({format: {message: 'Nickname must start with an \'a\''}});
  });

  it('should return "null" if value of the AbstractControl value starts with "a"', async () => {
    const control = new FormControl('a');
    const validation$ = validator(control) as Observable<ValidationErrors | null>;
    const result = await validation$.toPromise();
    expect(result).toBeNull();
  });

});

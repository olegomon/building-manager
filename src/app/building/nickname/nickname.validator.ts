import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable, timer} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {NicknameService} from './nickname.service';

export const nicknameFormatValidator = (nicknameService: NicknameService, debounce: number = 250): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {

    // do not hit the validation service on each keystroke
    return timer(debounce).pipe(
      switchMap(() => nicknameService.isValidNickname(control.value).pipe(
        map(isValid => (!isValid ? {format: {message: `Nickname must start with an 'a'`}} : null)),
        catchError(() => null)
      ))
    );
  };
};

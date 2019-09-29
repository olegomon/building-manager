import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable, timer} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {NicknameService} from './nickname.service';

export const nicknameFormatValidator = (nicknameService: NicknameService, debounce: number = 250): AsyncValidatorFn => {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return timer(debounce).pipe(
      tap(() => console.log('start validation', control.value, control.status)),
      switchMap(() => nicknameService.isValidNickname(control.value).pipe(
        map(isValid => (isValid ? {format: {message: `Nickname must start with an 'a'`}} : null)),
        tap(result => console.log('end validation', result)),
        catchError(() => null)
      ))
    );
  };
};

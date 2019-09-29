import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {INicknameService} from './nickname.service.interface';

@Injectable({
  providedIn: 'root'
})
export class NicknameService implements INicknameService {

  private regex = /^a/;

  constructor() {
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  saveNicknames(nicknames: string[]) {
    return of(nicknames).pipe(
      delay(this.getRandomInt(250))
    );
  }

  // deleteNickname(nickname: string) {
  //   return of(nicknames).pipe(
  //     delay(this.getRandomInt(250))
  //   );
  // }

  isValidNickname(name: string): Observable<boolean> {
    return of(!this.regex.test(name)).pipe(
      delay(this.getRandomInt(250))
    );
  }
}

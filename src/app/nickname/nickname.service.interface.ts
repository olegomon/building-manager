import {Observable} from 'rxjs';

export interface INicknameService {
  saveNicknames(nicknames: string[]);
  isValidNickname(name: string): Observable<boolean>;
}

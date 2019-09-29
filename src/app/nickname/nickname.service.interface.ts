import {Observable} from 'rxjs';

export interface INicknameService {
  isValidNickname(name: string): Observable<boolean>;
}

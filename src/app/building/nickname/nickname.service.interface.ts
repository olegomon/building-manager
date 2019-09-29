import {Observable} from 'rxjs';

export interface INicknameService {
  saveNicknames(nicknames: string[]);
  fetchNicknames(): Observable<string[]>;
  createNickname(nickname: string): Observable<string[]>;
  deleteNicknameByIndex(index: number): Observable<string[]>;
  isValidNickname(name: string): Observable<boolean>;
}

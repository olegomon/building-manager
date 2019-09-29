import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {Logger} from '../logger.service';
import {INicknameService} from './nickname.service.interface';

/**
 * Simple Nickname service to simulate backend communication
 */
@Injectable({
  providedIn: 'root'
})
export class NicknameService implements INicknameService {

  /**
   * Regex for "backend" validation of nicknames
   */
  private regex = /^a/;

  /**
   * Nicknames from "backend"
   */
  private nicknames = [];

  constructor(private logger: Logger) {
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  fetchNicknames(): Observable<string[]> {
    return of(this.nicknames).pipe(
      delay(this.getRandomInt(250))
    );
  }

  createNickname(nickname: string): Observable<string[]> {
    this.nicknames = [...this.nicknames, nickname];
    return this.fetchNicknames().pipe(
      tap(() => this.logger.log(`Nickname added`))
    );
  }

  saveNicknames(nicknames: string[]): Observable<string[]> {
    this.nicknames = [...nicknames];
    return this.fetchNicknames().pipe(
      tap(() => this.logger.log('Nicknames saved', nicknames))
    );
  }

  deleteNicknameByIndex(index: number): Observable<string[]> {
    this.nicknames = [...this.nicknames.slice(0, index), ...this.nicknames.slice(index + 1)];
    return this.fetchNicknames().pipe(
      tap(() => this.logger.log('Nickname deleted', index))
    );
  }

  /**
   * Validate nickname format which should start with letter 'a'
   */
  isValidNickname(nickname: string): Observable<boolean> {
    return of(this.regex.test(nickname)).pipe(
      delay(this.getRandomInt(250)),
      tap((isValid) => this.logger.log('Nickname validated', isValid))
    );
  }
}

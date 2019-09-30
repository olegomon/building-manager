import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {Logger} from '../../logger.service';
import {INicknameService} from './nickname.service.interface';

/**
 * Simple Nickname service
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

  fetchNicknames(): Observable<string[]> {
    return of(this.nicknames);
  }

  createNickname(nickname: string): Observable<string[]> {
    this.nicknames = [...this.nicknames, nickname];
    return this.fetchNicknames();
  }

  saveNicknames(nicknames: string[]): Observable<string[]> {
    this.nicknames = [...nicknames];
    return this.fetchNicknames();
  }

  deleteNicknameByIndex(index: number): Observable<string[]> {
    this.nicknames = [...this.nicknames.slice(0, index), ...this.nicknames.slice(index + 1)];
    return this.fetchNicknames();
  }

  /**
   * Validate nickname format which should start with letter 'a'
   */
  isValidNickname(nickname: string): Observable<boolean> {
    return of(this.regex.test(nickname));
  }
}

/**
 * Simple Nickname service to simulate network connections
 */
@Injectable({
  providedIn: 'root'
})
export class DelayedNicknameService implements INicknameService {

  constructor(private nicknameService: INicknameService, private logger: Logger, private maxDelay: number = 250) {
  }

  private getRandomDelay() {
    return Math.floor(Math.random() * Math.floor(this.maxDelay));
  }

  private delay<T>(observable: Observable<T>) {
    return observable.pipe(delay(this.getRandomDelay()));
  }

  createNickname(nickname: string): Observable<string[]> {
    return this.delay(this.nicknameService.createNickname(nickname));
  }

  deleteNicknameByIndex(index: number): Observable<string[]> {
    return this.delay(this.nicknameService.deleteNicknameByIndex(index));
  }

  fetchNicknames(): Observable<string[]> {
    return this.delay(this.nicknameService.fetchNicknames());
  }

  isValidNickname(name: string): Observable<boolean> {
    return this.delay(this.nicknameService.isValidNickname(name));
  }

  saveNicknames(nicknames: string[]) {
    return this.delay(this.nicknameService.saveNicknames(nicknames));
  }
}

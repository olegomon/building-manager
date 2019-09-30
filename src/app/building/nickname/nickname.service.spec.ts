import {TestBed} from '@angular/core/testing';

import {NicknameService} from './nickname.service';

describe('NicknameService', () => {

  let service: NicknameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: NicknameService, useClass: NicknameService}
      ]
    });
    service = TestBed.get(NicknameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetchNicknames should return empty initially', async () => {
    const nicknames = await service.fetchNicknames().toPromise();
    expect(nicknames).toEqual([]);
  });

  it('fetchNicknames should return empty initially', async () => {
    const nicknames = await service.fetchNicknames().toPromise();
    expect(nicknames).toEqual([]);
  });

  it('createNickname should add a nickname', async () => {
    const nicknames = await service.createNickname('A').toPromise();
    expect(nicknames).toEqual(['A']);
  });

  it('saveNicknames should save all nicknames', async () => {
    const nicknames = await service.saveNicknames(['A', 'B', 'C']).toPromise();
    expect(nicknames).toEqual(['A', 'B', 'C']);
  });

  it('deleteNicknameByIndex delete a nickname from index', async () => {
    await service.saveNicknames(['A', 'B', 'C']).toPromise();
    const nicknames = await service.deleteNicknameByIndex(1).toPromise();
    expect(nicknames).toEqual(['A', 'C']);
  });

  it('deleteNicknameByIndex with negative index should have no effect', async () => {
    await service.saveNicknames(['A', 'B', 'C']).toPromise();
    const nicknames = await service.deleteNicknameByIndex(-1).toPromise();
    expect(nicknames).toEqual(['A', 'B', 'C']);
  });

  it('deleteNicknameByIndex with greater then length no effect', async () => {
    await service.saveNicknames(['A', 'B', 'C']).toPromise();
    const nicknames = await service.deleteNicknameByIndex(3).toPromise();
    expect(nicknames).toEqual(['A', 'B', 'C']);
  });

  it('isValidNickname should return true if nickname starts with "a"', async () => {
    const isValid = await service.isValidNickname('a1').toPromise();
    expect(isValid).toBe(true);
  });

  it('isValidNickname should return false if nickname does not starts with "a"', async () => {
    const isValid = await service.isValidNickname('b').toPromise();
    expect(isValid).toBe(false);
  });

});

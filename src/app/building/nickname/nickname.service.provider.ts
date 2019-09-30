import {DelayedNicknameService, NicknameService} from './nickname.service';

export const nicknameServiceProvider = {
  provide: NicknameService,
  useClass: DelayedNicknameService,
  deps: []
};

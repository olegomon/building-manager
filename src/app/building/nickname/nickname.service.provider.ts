import {Logger} from '../../logger.service';
import {DelayedNicknameService, NicknameService} from './nickname.service';

export const delayedNicknameServiceFactory = (logger: Logger) => {
  console.log('delayed service');
  return new DelayedNicknameService(new NicknameService(), logger, 250);
};

export const nicknameServiceProvider = {
  provide: NicknameService,
  useFactory: delayedNicknameServiceFactory,
  deps: [Logger]
};

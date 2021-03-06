import {Component, OnInit} from '@angular/core';
import {AsyncValidatorFn, ValidatorFn, Validators} from '@angular/forms';
import {AppToast} from '../app-toasts/app-toast';
import {AppToastService} from '../app-toasts/app-toast.service';
import {NicknameService} from './nickname/nickname.service';
import {nicknameFormatValidator} from './nickname/nickname.validator';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

  nicknames = [];

  syncValidators: ValidatorFn[];
  asyncValidators: AsyncValidatorFn[];

  buildingImage = 'https://dummyimage.com/600x400/007bff/fff';
  buildingAddress = '30 St Mary Axe, London';
  buildingDescription = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ...';

  constructor(private appToastService: AppToastService, private nicknameService: NicknameService) {
    this.syncValidators = [Validators.required];
    this.asyncValidators = [nicknameFormatValidator(this.nicknameService)];
  }

  ngOnInit(): void {
    this.fetchNicknames();
  }

  private fetchNicknames() {
    this.nicknameService.fetchNicknames().subscribe((nicknames) => this.nicknames = nicknames);
  }

  onDelete(index: number) {
    this.nicknameService.deleteNicknameByIndex(index).subscribe((newNicknames) => {
      this.nicknames = newNicknames;
      this.appToastService.show(new AppToast('Deleted', 'Nickname deleted'));
    });
  }

  onSave(nicknames: string[]) {
    this.nicknameService.saveNicknames(nicknames).subscribe((newNicknames) => {
      this.nicknames = newNicknames;
      this.appToastService.show(new AppToast('Saved', 'Nicknames saved'));
    });
  }

  onAdd(nickname) {
    this.nicknameService.createNickname(nickname).subscribe((nicknames) => {
      this.nicknames = nicknames.slice();
      this.appToastService.show(new AppToast('Added', 'Nickname added'));
    });
  }

}

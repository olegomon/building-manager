import {Component} from '@angular/core';
import {AsyncValidatorFn, ValidatorFn, Validators} from '@angular/forms';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {NicknameService} from '../nickname/nickname.service';
import {nicknameFormatValidator} from '../nickname/nickname.validator';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent {

  addressIcon = faMapMarkerAlt;
  address = '30 St Mary Axe, London';
  description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ...';
  nicknames = [];

  syncValidators: ValidatorFn[] = [Validators.required];
  asyncValidators: AsyncValidatorFn[] = [nicknameFormatValidator(this.nicknameService)];

  constructor(private nicknameService: NicknameService) {
  }

  onDelete(index: number) {
    // TODO user index
    console.log('delete', index);
    console.log('delete before', this.nicknames);

    this.nicknames = [
      ...this.nicknames.slice(0, index),
      ...this.nicknames.slice(index + 1)
    ];

    console.log('delete after', this.nicknames);
  }

  onSave(nicknames: string[]) {
    // this.nicknames = nicknames;
    // console.log('save nicknames', nicknames);
    this.nicknameService.saveNicknames(nicknames);
  }

  onAdd(nickname) {
    console.log('add before', this.nicknames);
    this.nicknames = [...this.nicknames, nickname];
    console.log('add after', this.nicknames);
  }

}

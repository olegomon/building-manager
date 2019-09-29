import {Component} from '@angular/core';
import {AsyncValidatorFn, ValidatorFn, Validators} from '@angular/forms';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import {NicknameService} from './nickname/nickname.service';
import {nicknameFormatValidator} from './nickname/nickname.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appTitle = 'Buildings';
  appIcon = faBuilding;

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
    this.nicknames = nicknames;
    console.log('save nicknames', nicknames);
  }

  onAdd(nickname) {
    console.log('add before', this.nicknames);
    this.nicknames = [...this.nicknames, nickname];
    console.log('add after', this.nicknames);
  }
}

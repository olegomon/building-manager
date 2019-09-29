import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-nickname-factory',
  templateUrl: './nickname-factory.component.html',
  styleUrls: ['./nickname-factory.component.scss']
})
export class NicknameFactoryComponent implements OnInit {

  @Input()
  syncValidators: ValidatorFn | ValidatorFn[] | null = null;

  @Input()
  asyncValidators: AsyncValidatorFn | AsyncValidatorFn[] | null = null;

  @Input()
  autofocus = false;
  @Input()
  placeholder = '';
  @Input()
  label = 'Nickname';

  @Output()
  add = new EventEmitter<string>();

  formControl = new FormControl('');

  constructor() {
  }

  ngOnInit() {
    this.formControl.setValidators(this.syncValidators);
    this.formControl.setAsyncValidators(this.asyncValidators);
  }

  onAdd() {
    const nickname = this.formControl.value;
    this.add.emit(nickname);
    this.formControl.reset();
  }

  showError(control: AbstractControl) {
    return control.invalid && control.dirty && control.touched;
  }

  isPending(control: AbstractControl) {
    return control.pending;
  }

  isValid(control: AbstractControl) {
    return control.valid;
  }

  canSave(formControl: FormControl) {
    return !this.isPending(formControl) && this.isValid(formControl);
  }
}

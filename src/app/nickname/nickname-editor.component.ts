import {Component, OnInit} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {NicknameService} from './nickname.service';
import {nicknameFormatValidator} from './nickname.validator';

@Component({
  selector: 'app-nickname-editor',
  templateUrl: './nickname-editor.component.html',
  styleUrls: ['./nickname-editor.component.scss']
})
export class NicknameEditorComponent implements OnInit {

  editorForm: FormGroup;
  deleteIcon = faTrashAlt;

  private syncValidators: ValidatorFn[] = [Validators.required];
  private asyncValidators: AsyncValidatorFn[] = [nicknameFormatValidator(this.nicknameService)];

  constructor(private formBuilder: FormBuilder, private nicknameService: NicknameService) {
  }

  get nicknames() {
    return this.editorForm.get('nicknames') as FormArray;
  }

  ngOnInit() {
    this.editorForm = this.formBuilder.group({
      nicknames: this.formBuilder.array([
        this.formBuilder.control('', {
          validators: this.syncValidators,
          asyncValidators: this.asyncValidators
        })
      ])
    });
  }

  addNickname() {
    this.nicknames.push(this.formBuilder.control('', {
      validators: this.syncValidators,
      asyncValidators: this.asyncValidators
    }));
  }

  onSubmit() {
    console.log(this.editorForm.value);
  }

  deleteNickname(index: number) {
    this.nicknames.removeAt(index);
  }

  showError(control: AbstractControl) {
    return control.invalid && (control.dirty || control.touched);
  }

  isPending(control: AbstractControl) {
    return control.status === 'PENDING';
  }
}

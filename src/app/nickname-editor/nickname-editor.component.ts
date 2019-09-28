import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nickname-editor',
  templateUrl: './nickname-editor.component.html',
  styleUrls: ['./nickname-editor.component.scss']
})
export class NicknameEditorComponent implements OnInit {

  editorForm: FormGroup;
  deleteIcon = faTrashAlt;
  private syncValidators: ValidatorFn[] = [Validators.required];

  constructor(private formBuilder: FormBuilder) {
  }

  get nicknames() {
    return this.editorForm.get('nicknames') as FormArray;
  }

  ngOnInit() {
    this.editorForm = this.formBuilder.group({
      nicknames: this.formBuilder.array([
        this.formBuilder.control('', this.syncValidators)
      ])
    });
  }

  isValid(index: number) {
    // this.nicknames.get(index);
  }

  addNickname() {
    this.nicknames.push(this.formBuilder.control('', this.syncValidators));
  }

  onSubmit() {
    console.log(this.editorForm.value);
  }

  deleteNickname(index: number) {
    this.nicknames.removeAt(index);
  }

  showError(control: AbstractControl) {
    return control.invalid && control.dirty && control.touched;
  }
}

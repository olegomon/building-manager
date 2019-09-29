import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormGroup, ValidatorFn} from '@angular/forms';
import {faPlus, faTimes, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nickname-editor',
  templateUrl: './nickname-editor.component.html',
  styleUrls: ['./nickname-editor.component.scss']
})
export class NicknameEditorComponent implements OnInit, OnChanges {

  form: FormGroup;
  deleteIcon = faTrashAlt;
  addIcon = faPlus;
  cancelIcon = faTimes;
  isCollapsed = true;

  @Input()
  values: string[] = [];

  @Input()
  syncValidators: ValidatorFn | ValidatorFn[] | null = null;

  @Input()
  asyncValidators: AsyncValidatorFn | AsyncValidatorFn[] | null = null;

  @Output()
  save = new EventEmitter<string[]>();

  @Output()
  delete = new EventEmitter<number>();

  @Output()
  add = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
  }

  get inputList() {
    return this.form.get('inputs') as FormArray;
  }

  ngOnInit() {
    // if (this.nicknames.length === 0) {
    //   this.isCollapsed = false;
    // } else {
      this.form = this.createForm(this.values);
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.values) {
      const values = changes.values.currentValue;
      this.form = this.createForm(values);
    }
  }

  createForm(values: string[]) {
    const nicknames = values.map((nickname) => this.formBuilder.control(nickname, {
      validators: this.syncValidators,
      asyncValidators: this.asyncValidators
    }));
    return this.formBuilder.group({
      inputs: this.formBuilder.array(nicknames)
    });
  }

  onSave() {
    const nicknames = this.inputList.value;
    this.save.emit(nicknames);
    // if (this.form.valid) {
    //   const nicknames = this.form.value;
    //   this.save.emit(nicknames);
    // } else {
    //   this.nicknames.markAllAsTouched();
    // }
  }

  onAdd(nickname: string) {
    this.onToggle();
    this.add.emit(nickname);
  }

  onDelete(index: number) {
    this.delete.emit(index);
  }

  showError(control: AbstractControl) {
    return control.invalid && (control.dirty || control.touched);
  }

  isPending(control: AbstractControl) {
    return control.pending;
  }

  isEmpty() {
    return this.inputList && this.inputList.length === 0;
  }

  onToggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}

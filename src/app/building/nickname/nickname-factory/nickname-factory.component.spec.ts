import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule, Validators} from '@angular/forms';

import {NicknameFactoryComponent} from './nickname-factory.component';

describe('NicknameFactoryComponent', () => {
  let component: NicknameFactoryComponent;
  let fixture: ComponentFixture<NicknameFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NicknameFactoryComponent
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameFactoryComponent);
    component = fixture.componentInstance;
    component.syncValidators = [Validators.required];
    component.asyncValidators = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should set validators on form control', () => {
  //
  //   // expect(component.formControl.validator).to
  // });
});

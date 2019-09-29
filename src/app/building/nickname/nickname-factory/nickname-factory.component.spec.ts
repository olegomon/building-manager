import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicknameFactoryComponent } from './nickname-factory.component';

describe('NicknameFactoryComponent', () => {
  let component: NicknameFactoryComponent;
  let fixture: ComponentFixture<NicknameFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicknameFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BuildingModule} from '../building.module';

import { NicknameEditorComponent } from './nickname-editor.component';
import {NicknameService} from './nickname.service';

describe('NicknameEditorComponent', () => {
  let component: NicknameEditorComponent;
  let fixture: ComponentFixture<NicknameEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BuildingModule
      ],
      providers: [
        {provide: NicknameService, useClass: NicknameService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

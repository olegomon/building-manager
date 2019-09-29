import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToastsComponent } from './app-toasts.component';
import {AppToastsModule} from './app-toasts.module';

describe('AppToastsComponent', () => {
  let component: AppToastsComponent;
  let fixture: ComponentFixture<AppToastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppToastsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

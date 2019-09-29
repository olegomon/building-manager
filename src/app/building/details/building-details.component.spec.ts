import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BuildingModule} from '../building.module';

import {BuildingDetailsComponent} from './building-details.component';

describe('BuildingDetailsComponent', () => {
  let component: BuildingDetailsComponent;
  let fixture: ComponentFixture<BuildingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BuildingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

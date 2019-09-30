import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BuildingComponent} from './building.component';
import {BuildingModule} from './building.module';
import {NicknameService} from './nickname/nickname.service';

describe('BuildingComponent', () => {
  let component: BuildingComponent;
  let fixture: ComponentFixture<BuildingComponent>;

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
    fixture = TestBed.createComponent(BuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

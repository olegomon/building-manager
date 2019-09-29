import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BuildingModule} from '../building.module';

import {BuildingDetailsComponent} from './building-details.component';

describe('BuildingDetailsComponent', () => {
  let component: BuildingDetailsComponent;
  let fixture: ComponentFixture<BuildingDetailsComponent>;
  let element: HTMLElement;

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
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render image', () => {
    const image = 'http://www.example.org/image.jpg';
    const address = 'Some place on earth';
    component.image = image;
    component.address = address;
    fixture.detectChanges();
    expect(element.querySelector('img').getAttribute('src')).toEqual(image);
    expect(element.querySelector('img').getAttribute('alt')).toEqual(address);
  });

  it('should render address in card body title', () => {
    const address = 'Some place on earth';
    component.address = address;
    fixture.detectChanges();
    expect(element.querySelector('.card-body h5').textContent).toContain(address);
  });

  it('should render description in card body text', () => {
    const description = 'Some building description';
    component.description = description;
    fixture.detectChanges();
    expect(element.querySelector('.card-body .card-text').textContent).toContain(description);
  });

});

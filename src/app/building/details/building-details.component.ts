import {Component, Input} from '@angular/core';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.scss']
})
export class BuildingDetailsComponent {

  addressIcon = faMapMarkerAlt;

  @Input()
  address: string;

  @Input()
  image: string;

  @Input()
  description: string;
}

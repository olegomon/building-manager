import {Component} from '@angular/core';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent {

  addressIcon = faMapMarkerAlt;
  address = '30 St Mary Axe, London';
  description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ...';

  constructor() {
  }

}

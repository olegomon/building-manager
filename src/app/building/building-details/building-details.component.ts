import {Component, OnInit} from '@angular/core';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.scss']
})
export class BuildingDetailsComponent implements OnInit {

  addressIcon = faMapMarkerAlt;
  address = '30 St Mary Axe, London';
  description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ...';

  constructor() {
  }

  ngOnInit() {
  }
}

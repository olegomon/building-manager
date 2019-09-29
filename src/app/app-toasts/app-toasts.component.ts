import {Component} from '@angular/core';
import {AppToastService} from './app-toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './app-toasts.component.html',
  styleUrls: ['./app-toasts.component.scss']
})
export class AppToastsComponent {
  delay: 2000;
  constructor(private toastsService: AppToastService) {
  }
}

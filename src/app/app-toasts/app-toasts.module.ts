import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppToastsComponent} from './app-toasts.component';

@NgModule({
  declarations: [
    AppToastsComponent
  ],
  exports: [
    AppToastsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class AppToastsModule {
}

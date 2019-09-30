import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppRoutingModule} from './app-routing.module';
import {AppToastsModule} from './app-toasts/app-toasts.module';
import {AppComponent} from './app.component';
import {BuildingModule} from './building/building.module';
import {NicknameService} from './building/nickname/nickname.service';
import {Logger, SilentLogger} from './logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BuildingModule,
    AppToastsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: Logger, useClass: SilentLogger}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

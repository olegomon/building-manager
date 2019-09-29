import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BuildingComponent} from './building/building.component';
import {NicknameEditorComponent} from './nickname/nickname-editor.component';
import { NicknameFactoryComponent } from './nickname/nickname-factory/nickname-factory.component';
import { BuildingDetailsComponent } from './building/building-details/building-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    NicknameEditorComponent,
    NicknameFactoryComponent,
    BuildingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,

    // TODO create and move to building component module
    ReactiveFormsModule,

    // TODO add only required modules!
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

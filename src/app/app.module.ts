import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BuildingComponent} from './building/building.component';
import {NicknameEditorComponent} from './nickname-editor/nickname-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    NicknameEditorComponent
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

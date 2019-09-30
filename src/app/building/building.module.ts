import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppToastsModule} from '../app-toasts/app-toasts.module';
import {BuildingComponent} from './building.component';
import {BuildingDetailsComponent} from './details/building-details.component';
import {NicknameEditorComponent} from './nickname/nickname-editor.component';
import {NicknameFactoryComponent} from './nickname/nickname-factory/nickname-factory.component';
import {nicknameServiceProvider} from './nickname/nickname.service.provider';


@NgModule({
  declarations: [
    NicknameEditorComponent,
    NicknameFactoryComponent,
    BuildingDetailsComponent,
    BuildingComponent
  ],
  exports: [
    NicknameEditorComponent,
    NicknameFactoryComponent,
    BuildingDetailsComponent,
    BuildingComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,
    AppToastsModule
  ],
  providers: [
    nicknameServiceProvider
  ]
})
export class BuildingModule {
}

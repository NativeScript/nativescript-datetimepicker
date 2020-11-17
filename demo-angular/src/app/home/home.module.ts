import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule
} from '@nativescript/angular';
import { NativeScriptDateTimePickerModule } from 'nativescript-datetimepicker/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptDateTimePickerModule,
    NativeScriptFormsModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {}

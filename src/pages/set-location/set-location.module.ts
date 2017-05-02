import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SetLocation } from './set-location';

@NgModule({
  declarations: [
    SetLocation,
  ],
  imports: [
    IonicModule.forChild(SetLocation),
  ],
  exports: [
    SetLocation
  ]
})
export class SetLocationModule {}

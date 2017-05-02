import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Place } from './place';

@NgModule({
  declarations: [
    Place,
  ],
  imports: [
    IonicModule.forChild(Place),
  ],
  exports: [
    Place
  ]
})
export class PlaceModule {}

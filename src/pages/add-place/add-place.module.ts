import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AddPlace } from './add-place';

@NgModule({
  declarations: [
    AddPlace,
  ],
  imports: [
    IonicModule.forChild(AddPlace),
  ],
  exports: [
    AddPlace
  ]
})
export class AddPlaceModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComptePage } from './compte';

@NgModule({
  declarations: [
    ComptePage
  ],
  imports: [
    IonicPageModule.forChild(ComptePage)
  ],
  exports:[
    ComptePage
]
})
export class ComptePageModule {}

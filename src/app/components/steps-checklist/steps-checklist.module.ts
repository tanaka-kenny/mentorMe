import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StepsChecklistComponent } from './steps-checklist.component';



@NgModule({
  declarations: [
    StepsChecklistComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    StepsChecklistComponent
  ]
})
export class StepsChecklistModule { }

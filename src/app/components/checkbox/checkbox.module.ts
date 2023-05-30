import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CheckboxComponent
  ]
})
export class CheckboxModule { }

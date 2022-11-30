import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ContainerComponent } from './container.component';
import { BackgroundModule } from '../background/background.module';



@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    IonicModule,
    BackgroundModule
  ],
  exports: [ContainerComponent]
})
export class ContainerModule { }

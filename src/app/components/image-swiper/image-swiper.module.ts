import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSwiperComponent } from './image-swiper.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ImageSwiperComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ImageSwiperComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class ImageSwiperModule { }

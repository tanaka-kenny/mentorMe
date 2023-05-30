import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BackgroundModule } from 'src/app/components/background/background.module';
import { ProfileSectionModule } from 'src/app/profile-section/profile-section.module';
import { ImageSwiperModule } from 'src/app/components/image-swiper/image-swiper.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BackgroundModule,
    ProfileSectionModule,
    ImageSwiperModule
  ],
  declarations: [HomeComponent]
})
export class HomePageModule {}

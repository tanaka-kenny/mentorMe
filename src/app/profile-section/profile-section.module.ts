import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSectionComponent } from './profile-section.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ProfileSectionComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ProfileSectionComponent]
})
export class ProfileSectionModule { }

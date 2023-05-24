import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { ToggleModule } from 'src/app/components/toggle/toggle.module';
import { BackgroundModule } from 'src/app/components/background/background.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { InputModule } from 'src/app/components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule,
    ToggleModule,
    BackgroundModule,
    ReactiveFormsModule,
    InputModule
  ],
  declarations: [
    LandingPage,
    SignUpComponent
  ]
})
export class LandingPageModule {}

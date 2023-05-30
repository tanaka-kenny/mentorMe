import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { VerifyComponent } from './verify/verify.component';
import { UploadIdComponent } from './upload-id/upload-id.component';
import { InputModule } from 'src/app/components/input/input.module';
import { BackgroundModule } from 'src/app/components/background/background.module';
import { OtpComponent } from './otp/otp.component';
import { StepsChecklistModule } from 'src/app/components/steps-checklist/steps-checklist.module';
import { ChooseFieldComponent } from './choose-field/choose-field.component';
import { CheckboxModule } from 'src/app/components/checkbox/checkbox.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    InputModule,
    BackgroundModule,
    ReactiveFormsModule,
    StepsChecklistModule,
    CheckboxModule
  ],
  declarations: [
    PersonalDetailsComponent,
    VerifyComponent,
    UploadIdComponent,
    OtpComponent,
    ChooseFieldComponent
  ]
})
export class RegisterPageModule {}

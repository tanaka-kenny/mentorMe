import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { ContainerModule } from 'src/app/components/container/container.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { VerifyComponent } from './verify/verify.component';
import { UploadIdComponent } from './upload-id/upload-id.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ContainerModule
  ],
  declarations: [
    SignUpComponent,
    PersonalDetailsComponent,
    VerifyComponent,
    UploadIdComponent
  ]
})
export class RegisterPageModule {}

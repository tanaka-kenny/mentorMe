import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpComponent } from './otp/otp.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { UploadIdComponent } from './upload-id/upload-id.component';
import { VerifyComponent } from './verify/verify.component';
import { ChooseFieldComponent } from './choose-field/choose-field.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal/details',
    pathMatch: 'full'
  },
  {
    path: 'personal/details',
    component: PersonalDetailsComponent
  },
  {
    path: 'verify',
    component: VerifyComponent
  },
  {
    path: 'upload/id',
    component: UploadIdComponent
  },
  {
    path: 'otp',
    component: OtpComponent
  },
  {
    path: 'choose/fields',
    component: ChooseFieldComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}

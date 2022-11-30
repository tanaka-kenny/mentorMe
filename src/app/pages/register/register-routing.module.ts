import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UploadIdComponent } from './upload-id/upload-id.component';
import { VerifyComponent } from './verify/verify.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign/up',
    pathMatch: 'full'
  },
  {
    path: 'sign/up',
    component: SignUpComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}

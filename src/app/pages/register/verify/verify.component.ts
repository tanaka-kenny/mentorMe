import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomizedUser } from 'src/app/models/customized-user.model';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { PhotoService } from 'src/app/services/photo.service';
import { switchMap } from 'rxjs/operators';
import { StepsChecklist } from 'src/app/models/steps-checklist.model';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent implements OnInit {
  user: CustomizedUser;
  steps: Array<StepsChecklist>;
  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
    private firestoreService: FirestoreService,
    private photoService: PhotoService) {}

  ngOnInit() {
    this.authorizationService.activeUser.pipe(
      switchMap(user => this.firestoreService.getUser(user.uid)))
        .subscribe(user => {
          this.user = user as CustomizedUser;
          this.steps = [
            {
              step: 'Identity document.',
              isComplete: this.user.verificationStatus.uploadedFrontOfId && this.user.verificationStatus.uploadedBackOfId},
            {
              step: 'Selfie',
              isComplete: this.user.verificationStatus.uploadedSelfie
            },
            {
              step: 'OTP',
              isComplete: this.user.verificationStatus.otpVerified
            }
          ];
        });
  }

  async chooseUploadOption() {
    if(!this.user.verificationStatus.uploadedFrontOfId) {
      this.router.navigate(['register', 'upload','id']);
    } else if(!this.user.verificationStatus.uploadedBackOfId) {
      this.router.navigate(['register', 'upload','id']);
    } else if(!this.user.verificationStatus.uploadedSelfie) {
      await this.uploadSelfie();
    } else if(!this.user.verificationStatus.otpVerified) {
      this.router.navigate(['register','otp']);
    }

    await this.firestoreService.addUser(this.user);
  }

  async uploadSelfie() {
    await this.photoService.selectPhoto();
    this.photoService.uploadImage('selfie');
    this.user.verificationStatus.uploadedSelfie = true;
  }



}

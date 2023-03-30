import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CustomizedUser } from 'src/app/models/customized-user.model';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-upload-id',
  templateUrl: './upload-id.component.html',
  styleUrls: ['./upload-id.component.scss'],
})
export class UploadIdComponent implements OnInit {
  user: CustomizedUser;

  constructor(
    public photoService: PhotoService,
    private authorizationService: AuthorizationService,
    private firestoreService: FirestoreService,
    private router: Router) { }

  ngOnInit() {
    this.authorizationService.activeUser.pipe(
      switchMap(user => this.firestoreService.getUser(user.uid)))
        .subscribe(user => this.user = user as CustomizedUser);
  }

  async selectImage() {
    await this.photoService.selectPhoto();

    if (!this.user.verificationStatus.uploadedFrontOfId) {
      await this.photoService.uploadImage('idPhotoFront');
      this.user.verificationStatus.uploadedFrontOfId = true;
      this.router.navigate(['register', 'verify']);
    } else if (!this.user.verificationStatus.uploadedBackOfId) {
      await this.photoService.uploadImage('idPhotoBack');
      this.user.verificationStatus.uploadedBackOfId = true;
      this.router.navigate(['register', 'verify']);
    }

    await this.firestoreService.addUser(this.user);
  }

}

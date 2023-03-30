import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  formGroup: FormGroup;
  isModalOpen: boolean;
  dateOfBirth: Date;
  today: string;
  months: string[];
  uid: string;

  constructor(
    public photoService: PhotoService,
    private router: Router,
    private firestoreService: FirestoreService,
    private authorizationService: AuthorizationService) {
    this.isModalOpen = false;
    this.today = new Date().toISOString();
    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    this.formGroup = this.createForm();
  }

  ngOnInit() {
    this.authorizationService
      .activeUser
        .subscribe(user => this.uid = user.uid);
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setDateOfBirth(date: any) {
    this.dateOfBirth = new Date(date.detail.value);
  }

  selectImage() {
    this.photoService.selectPhoto();
  }

  async nextScreen() {
    await this.saveUser();
    this.router.navigate(['register','verify']);
  }

  createForm() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      dateOfBirth: new FormGroup({
        day: new FormControl('', Validators.required),
        month: new FormControl('', Validators.required),
        year: new FormControl('', Validators.required)
      }),
      profilePhoto: new FormControl('')
    });
  }

  async saveUser() {
    if(this.photoService.uploadedPhotos.length > 0) {
      const imagePath = await this.photoService.uploadImage('profile-photo');
      this.formGroup.get('profilePhoto').setValue(imagePath);
    }

    await this.firestoreService.addUser({
      ...this.formGroup.value,
      verificationStatus: {
        uploadedFrontOfId: false,
        uploadedSelfie: false,
        uploadedBackOfId: false,
        otpVerified: false
      },
      uid: this.uid
    });
  }

}

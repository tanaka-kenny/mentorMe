import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService, UserPhoto } from 'src/app/services/photo.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  isModalOpen: boolean;
  dateOfBirth: Date;
  today: string;
  months: string[];

  constructor(
    public photoService: PhotoService,
    private router: Router) {
    this.isModalOpen = false;
    this.today = new Date().toISOString();
    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setDateOfBirth(date: any) {
    this.dateOfBirth = new Date(date.detail.value);
  }

  selectImage() {
    this.photoService.selectPhoto();
  }

  nextScreen() {
    this.router.navigate(['register','verify']);
  }

}

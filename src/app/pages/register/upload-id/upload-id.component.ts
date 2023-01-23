import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-upload-id',
  templateUrl: './upload-id.component.html',
  styleUrls: ['./upload-id.component.scss'],
})
export class UploadIdComponent implements OnInit {

  constructor(
    public photoService: PhotoService) { }

  ngOnInit() {}

  selectImage() {
    this.photoService.selectPhoto();
  }

}

import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photos: UserPhoto[] = [];

  constructor() { }

  get uploadedPhotos() {
    return this.photos;
  }

  async selectPhoto() {
    const selectedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: selectedPhoto.path,
      webviewPath: selectedPhoto.webPath
    });
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}

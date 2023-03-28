import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { ref, Storage, uploadBytes } from '@angular/fire/storage';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photos: UserPhoto[] = [];
  private uid: string;
  private selectedPhoto: Photo;

  constructor(
    private storage: Storage,
    authService: AuthorizationService) {
      authService.activeUser.subscribe((user: User) => {
        this.uid = user.uid;
      });
    }

  get uploadedPhotos() {
    return this.photos;
  }

  async selectPhoto() {
    this.selectedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: this.selectedPhoto.path,
      webviewPath: this.selectedPhoto.webPath
    });
  }

  async uploadImage(imageName: string) {
    const response = await fetch(this.selectedPhoto.webPath);
    const blob = await response.blob();
    const storageRef = ref(this.storage, `${this.uid}/${imageName}`);

    await uploadBytes(storageRef, blob);

    return storageRef.fullPath;
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}

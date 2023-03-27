import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private uid: string;
  constructor(
    private firestore: Firestore,
    private authService: AuthorizationService) {
      this.authService.activeUser.subscribe((user: User) =>  this.uid = user.uid);
    }

  async addUser(user: User) {
    await setDoc(doc(this.firestore, 'users', this.uid), user);
  }
}

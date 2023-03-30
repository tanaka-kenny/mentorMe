import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { CustomizedUser } from '../models/customized-user.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: Firestore) {}

  async addUser(user: CustomizedUser) {
    await setDoc(doc(this.firestore, 'users', user.uid), user);
  }

  getUser(uid: string) {
    const userRef = doc(this.firestore, 'users', uid);
    return docData(userRef);
  }
}

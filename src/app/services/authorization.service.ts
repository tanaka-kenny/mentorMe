import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getRedirectResult,
  User
 } from '@angular/fire/auth';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public user: User;

  constructor(
    private auth: Auth,
    private alertService: AlertService) { }

  get activeUser() {
    return this.user;
  }

  async loginWithGoogle() {
      signInWithRedirect(this.auth, new GoogleAuthProvider());
      const result = await getRedirectResult(this.auth);
      this.user = result.user;
  }

  async registerWithEmailAndPassword(email: string, password: string) {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, email, password);
      this.user = result.user;
      return this.user;
    } catch (error) {
     if (error.code === 'auth/email-already-in-use') {
      this.alertService.presentAlert('The email you entered is already is use!');
     }
    }
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      const result =  await signInWithEmailAndPassword(this.auth, email, password);
      this.user = result.user;
    } catch(error) {
      this.alertService.presentAlert('The login details you provided are invalid!');
    }
  }

  async loginWithFacebook() {
    signInWithRedirect(this.auth, new FacebookAuthProvider());
    const result = await getRedirectResult(this.auth);
    this.user = result.user;
  }

  signOut() {
    signOut(this.auth);
  }

}

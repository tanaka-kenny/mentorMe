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
  authState
 } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private auth: Auth,
    private alertService: AlertService,
    private router: Router) {
      this.handleRedirectResult();
     }

  get activeUser() {
    return authState(this.auth);
  }

  async loginWithGoogle() {
      signInWithRedirect(this.auth, new GoogleAuthProvider());
  }

  async loginWithFacebook() {
    signInWithRedirect(this.auth, new FacebookAuthProvider());
  }

  async registerWithEmailAndPassword(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
     if (error.code === 'auth/email-already-in-use') {
      this.alertService.presentAlert('The email you entered is already is use!');
     }
    }
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch(error) {
      this.alertService.presentAlert('The login details you provided are invalid!');
    }
  }

  signOut() {
    signOut(this.auth);
  }

  private async handleRedirectResult() {
    try {
      const res = await getRedirectResult(this.auth);
      if (!res) { throw new Error('No redirect result'); }

      this.router.navigate(['register', 'personal', 'details']);
    } catch(error) {
      console.log(error.message);

    }
  }
}


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
  User,
  fetchSignInMethodsForEmail
 } from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public user: Subject<User>;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private alertService: AlertService,
    private router: Router) {
      this.handleRedirectResult();
     }

  get activeUser() {
    return this.user;
  }

  async loginWithGoogle() {
      signInWithRedirect(this.auth, new GoogleAuthProvider());
  }

  async loginWithFacebook() {
    signInWithRedirect(this.auth, new FacebookAuthProvider());
  }

  async registerWithEmailAndPassword(email: string, password: string) {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, email, password);
      this.user.next(result.user);
    } catch (error) {
     if (error.code === 'auth/email-already-in-use') {
      this.alertService.presentAlert('The email you entered is already is use!');
     }
    }
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      const result =  await signInWithEmailAndPassword(this.auth, email, password);
      this.user.next(result.user);
    } catch(error) {
      this.alertService.presentAlert('The login details you provided are invalid!');
    }
  }

  signOut() {
    signOut(this.auth);
  }

  private async handleRedirectResult() {
    try {
      const { user } = await getRedirectResult(this.auth);

      if (!this.isAnExistingUser(user.email)) {
        await setDoc(doc(this.firestore, 'users', user.uid), {
          uid: user.uid
        });
      }

      this.router.navigate(['register', 'personal', 'details']);
    } catch(error) {}
  }

  private async isAnExistingUser(email: string) {
    const signInMethods = await fetchSignInMethodsForEmail(this.auth, email);

    return signInMethods.length > 0;
  }
}


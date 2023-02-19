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
  User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public user: User;

  constructor(private auth: Auth) { }

  get activeUser() {
    return this.user;
  }

  async loginWithGoogle() {
    try {
      signInWithRedirect(this.auth, new GoogleAuthProvider());
      const result = await getRedirectResult(this.auth);
      this.user = result.user;
    } catch (error) {
      // Handle account-exists-with-different-credential Errors
    }
  }

  async registerWithEmailAndPassword(email: string, password: string) {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, email, password);
      this.user = result.user;
      return this.user;
    } catch (error) {
      // respond to error codes with alert service
    }
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      const result =  await signInWithEmailAndPassword(this.auth, email, password);
      this.user = result.user;
    } catch(err) {
      // respond to error codes with alert service
    }
  }

  async loginWithFacebook() {
    signInWithRedirect(this.auth, new FacebookAuthProvider());
    try {
      const result = await getRedirectResult(this.auth);
      this.user = result.user;
    } catch (error) {
      // Handle account-exists-with-different-credential Errors
    }

  }

  signOut() {
    signOut(this.auth);
  }

}

import { Injectable } from '@angular/core';
import { CanActivateChild, CanLoad, Router, } from '@angular/router';
import {  of } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivateChild {

  constructor(
    private authService: AuthorizationService,
    private router: Router) {}

  canActivateChild() {
    return this.isUserLoggedIn();
  }

  canLoad() {
    return this.isUserLoggedIn();
  }

  private isUserLoggedIn() {
    return this.authService.activeUser
      .pipe(switchMap(user => {
        if (user) {
          return of(true);
        } else {
          this.router.navigate(['landing']);
          return of(false);
        }
      }));
  }
}

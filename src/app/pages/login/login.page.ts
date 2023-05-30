import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formGroup: FormGroup;

  constructor(
    private authService: AuthorizationService,
    private router: Router) {
    this.formGroup = this.createForm();
  }

  get email() {
    return this.formGroup.get('email').value as string;
  }

  get password() {
    return this.formGroup.get('password').value as string;
  }

  ngOnInit() {}

  signInWithGoogle() {
    this.authService.loginWithGoogle();
  }

  signInWithFacebook() {
    this.authService.loginWithFacebook();
  }

  onRegister() {
    this.router.navigate(['landing']);
  }

  async loginEmailAndPassword() {
    // TODO: add email login to auth service
  }

  private createForm() {
    return new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

}

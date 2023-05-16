import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  formGroup: FormGroup;

  constructor(private authService: AuthorizationService) {
    this.formGroup = this.createForm();
   }

  get email() {
    return this.formGroup.get('email').value as string;
  }

  get password() {
    return this.formGroup.get('password').value as string;
  }

  get confirmPassword() {
    return this.formGroup.get('confirmPassword').value as string;
  }

  async createUserWithEmailAndPassword() {
    await this.authService
      .registerWithEmailAndPassword(
        this.email,
        this.password);

      this.formGroup.reset();
  }

  async signInWithGoogle() {
    this.authService
      .loginWithGoogle();
  }

  async signInWithFacebook() {
    await this.authService
    .loginWithFacebook();
  }

  private createForm() {
    return new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ])
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  otpSend: boolean;

  constructor() {
    this.otpSend = true;
  }

  next() {
    this.otpSend = true;
  }

  ngOnInit() {}

  setInputFocus(event: KeyboardEvent, previous: IonInput, next: IonInput) {
    if ((event.key >= '0' && event.key <= '9') && next !== null) {
      next.setFocus();
    }

    if (event.key === 'Backspace' && previous !== null) {
      previous.setFocus();
    }
  }

}

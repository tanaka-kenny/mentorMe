import { Component, OnInit } from '@angular/core';
import { RadioOptions } from 'src/app/components/toggle/toggle.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  radioOptions: RadioOptions[];

  constructor() {
    this.radioOptions  = [
      { name:'Mentee', value: 'mentee' },
      { name: 'Mentor', value: 'mentor' }
    ];
  }

  ngOnInit() {
  }

  signUp() {}

}

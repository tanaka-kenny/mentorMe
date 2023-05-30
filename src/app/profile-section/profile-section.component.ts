import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss'],
})
export class ProfileSectionComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() username: string;

  constructor() {
    this.imgSrc = '';
    this.username = '';
  }

  ngOnInit() {}

}

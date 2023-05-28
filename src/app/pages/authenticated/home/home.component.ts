import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  availableMentors: { name: string; profession: string; image: string }[];

  constructor() {
    this.availableMentors = [
      { name: 'Eric Van de vaart', profession: 'Backend Developer', image: '../../../../assets/images/mentor-img-1.png' },
      { name: 'Pretty Hlatswayo', profession: 'Software Engineer', image: '../../../../assets/images/mentor-img-2.png' },
      { name: 'Eric Van de vaart', profession: 'Backend Developer', image: '../../../../assets/images/mentor-img-1.png' },
    ];
  }

  ngOnInit() {}

}

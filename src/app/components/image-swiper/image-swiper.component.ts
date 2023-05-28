import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-swiper',
  templateUrl: './image-swiper.component.html',
  styleUrls: ['./image-swiper.component.scss'],
})
export class ImageSwiperComponent implements OnInit {
  @Input() users: { name: string; profession: string; image: string }[];
  constructor() { }

  ngOnInit() {}

}

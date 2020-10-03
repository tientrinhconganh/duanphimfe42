import { Component, OnInit } from '@angular/core';
// import {carouselArr} from 'src/app/core/models/carouselArr'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  carouselArray: any = [
    {img: "/assets/img/bannerCarousel/hoi-15646486141725.jpg", trailer: "https://www.youtube.com/watch?v=GibiNy4d4gc"},
    {img: "/assets/img/bannerCarousel/nhat-15633351822616.jpg", trailer: "https://www.youtube.com/watch?v=GibiNy4d4gc"},
    {img: "/assets/img/bannerCarousel/sadako-15638544977053.jpg", trailer: "https://www.youtube.com/watch?v=GibiNy4d4gc"},
    {img: "/assets/img/bannerCarousel/nhen-15615549214462.jpg", trailer: "https://www.youtube.com/watch?v=GibiNy4d4gc"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

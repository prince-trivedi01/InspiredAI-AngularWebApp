import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.scss']
})
export class SixthComponent implements OnInit {

  constructor() { }

  customOptions: OwlOptions = {
    autoWidth: false,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
		autoplaySpeed: 2000,
    //autoplayMouseleaveTimeout: 5000,
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      768: {
        items: 2,
        nav: true
      },
      1440: {
        items: 3,
        nav: true
      },
      1899: {
        items: 3,
        margin: -380,
        nav: true
      }
    },
  }

  ngOnInit(): void {
  }

}

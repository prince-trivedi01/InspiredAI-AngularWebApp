import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Blog } from './blog.model';
import { BlogService } from '../blog.service';
import { DataStorageService } from '../data-storage.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(private blogservice: BlogService,private datastorageservice: DataStorageService) { }
  //Declaration
  TrendingBlogs: Blog[]=[];
  FreshBlogs: Blog[] = [];
  ListOfBlogs: Blog[] = [];

  ngOnInit(): void {
    this.datastorageservice.fetchData();
    this.blogservice.listChanged.subscribe(
      (listOfBlogs: Blog[]) => {
        this.ListOfBlogs = listOfBlogs;
      });

    //Retrieve required blogs
    this.TrendingBlogs = this.blogservice.getTrendingBlogs();
    //console.log(this.TrendingBlogs);
    this.FreshBlogs = this.blogservice.getFreshBlogs();
    this.ListOfBlogs = this.blogservice.getBlogs();
  }

  customOptions: OwlOptions = {
    autoWidth: true,
    loop: false,
    rewind: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
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
        margin: -130,
        nav: true
      },
      1440: {
        items: 3,
        margin: -70,
        nav: true
      },
      1899: {
        items: 4,
        margin: -70,
        nav: true
      }
    },
  }

}

import { Component, OnInit } from '@angular/core';
import { Blog } from '../blogs/blog.model';
import { ReviewCard } from '../blog-opened/reviewcard.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-opened',
  templateUrl: './blog-opened.component.html',
  styleUrls: ['./blog-opened.component.scss']
})
export class BlogOpenedComponent implements OnInit {
  content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
  
  repeat=[1,2,3,4,5,6]
  constructor(private blogservice: BlogService) { }

  //Declaration
  Cards: Blog[]=[];
  ReviewCards: ReviewCard[]=[];

  ngOnInit(): void {
    this.Cards=this.blogservice.getBlogs().slice(0,3);
    this.ReviewCards=this.blogservice.getReviewCards();
  }

  customOptions: OwlOptions = {
    autoWidth: true,
    loop: false,
    rewind: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: false,
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
        dots: true,
        margin: 55
      },
      768: {
        items: 2
      },
      1280: {
        items: 3
      },
      1440: {
        items: 3,
        margin: -300
      }
    },
  }

  dummyFunc(){
  }

}

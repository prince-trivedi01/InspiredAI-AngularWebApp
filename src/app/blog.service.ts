import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Blog } from './blogs/blog.model';
import { ReviewCard } from './blog-opened/reviewcard.model';


@Injectable({ providedIn: 'root' })
export class BlogService {
    listChanged = new Subject<Blog[]>();
    //Service file providing different functions to get, set, add, edit and delete blogs
    //Central storage location for all blogs

    //empty list of Blogs
    ListOfBlogs: Blog[] = [];

    FreshBlogs: Blog[] = [
        {
            imagePath: 'assets/photo1.png',
            title: 'Best place to learn about chatbots.',
            views: 169,
            likes: 125,
            comments: 43
        },
        {
            imagePath: 'assets/photo1.png',
            title: 'Best place to learn about chatbots.',
            views: 169,
            likes: 125,
            comments: 43
        },
        {
            imagePath: 'assets/photo1.png',
            title: 'Best place to learn about chatbots.',
            views: 169,
            likes: 125,
            comments: 43
        },
        {
            imagePath: 'assets/photo1.png',
            title: 'Best place to learn about chatbots.',
            views: 169,
            likes: 125,
            comments: 43
        },
        {
            imagePath: 'assets/photo1.png',
            title: 'Best place to learn about chatbots.',
            views: 169,
            likes: 125,
            comments: 43
        }
    ];
    ReviewCards: ReviewCard[] = [
        {
            imagePath: 'assets/dp.png',
            title: 'Anne Yates',
            date: new Date(),
            para: "“User Experience Design” is often used interchangeably with terms such as “User Interface Design” and “Usability”. However, while usability and user interface (UI) design are important aspects of UX design, they are subsets of it – UX design covers a vast array of other areas, too.",
            likes: 783
        },
        {
            imagePath: 'assets/dp2.png',
            title: 'Kenneth Erickson',
            //date: null,
            para: "The word \"coffee\" entered the English language in 1582 via the Dutch koffie…",
            likes: 783
        },
        {
            imagePath: 'assets/dp.png',
            title: 'Anne Yates',
            date: new Date(),
            para: "“User Experience Design” is often used interchangeably with terms such as “User Interface Design” and “Usability”. However, while usability and user interface (UI) design are important aspects of UX design, they are subsets of it – UX design covers a vast array of other areas, too.",
            likes: 783
        },
        {
            imagePath: 'assets/dp.png',
            title: 'Anne Yates',
            date: new Date(),
            para: "“User Experience Design” is often used interchangeably with terms such as “User Interface Design” and “Usability”. However, while usability and user interface (UI) design are important aspects of UX design, they are subsets of it – UX design covers a vast array of other areas, too.",
            likes: 783
        },
        {
            imagePath: 'assets/dp2.png',
            title: 'Kenneth Erickson',
            date: null,
            para: "The word \"coffee\" entered the English language in 1582 via the Dutch koffie…",
            likes: 783
        },
        {
            imagePath: 'assets/dp2.png',
            title: 'Kenneth Erickson',
            date: null,
            para: "The word \"coffee\" entered the English language in 1582 via the Dutch koffie…",
            likes: 783
        }
    ];

    getTrendingBlogs() {
        return this.ListOfBlogs.sort((b1, b2) => { return b2.likes - b1.likes }).slice(0, 5);
    }
    getFreshBlogs() {
        return this.FreshBlogs;
    }
    getBlogs() {
        return this.ListOfBlogs;
    }
    getReviewCards() {
        return this.ReviewCards;
    }

    //Assigning listOfBlogs to empty Blog list
    setBlogs(listOfBlogs: Blog[]) {
        this.ListOfBlogs = listOfBlogs;
        this.listChanged.next(listOfBlogs);
    }
}
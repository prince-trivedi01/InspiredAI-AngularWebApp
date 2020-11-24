import { Injectable } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './blogs/blog.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private blogservice: BlogService, private httpClientService: HttpClient) { }

    fetchData() {
        this.httpClientService.get(
            "https://inspired-ai.firebaseio.com/blogs.json"
        ).pipe(
            tap((listOfBlogs: Blog[]) => {
                console.log(listOfBlogs);
                this.blogservice.setBlogs(listOfBlogs);
            })
        ).subscribe();
    }
}
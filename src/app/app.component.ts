import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'insipiredai';
  constructor(private scrollDispatcher: ScrollDispatcher, private router: Router, private zone: NgZone, public mediaObserver: MediaObserver) { }
  scrolled: boolean = false;
  navbar_height:number=96;
  lastScrollTop:number=0;
  mediaSub: Subscription;
  devicexs: boolean;
  devicesm: boolean;


  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
    
}

  //ngOnInit(): void {
  //  this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
  //    this.devicexs = result.mqAlias==='xs' ? true : false
  //    this.devicesm = result.mqAlias==='sm' ? true : false
  //    if(this.devicexs || this.devicesm){
  //      this.navbar_height=122.88;
  //    }
  //    console.log(result.mqAlias,this.navbar_height)
  //  })
  //}
  ngAfterViewInit() {

    this.scrollDispatcher.scrolled().
      subscribe((cdk: CdkScrollable) => {
        this.zone.run(() => {
          //Here you can add what to happen when scroll changed
          //I want to display the scroll position for example
          //const scrollPosition = cdk.getElementRef().nativeElement.scrollTop;
          const scrollPosition = window.scrollY;
          console.log(scrollPosition,this.lastScrollTop);
          if (scrollPosition>=this.navbar_height && scrollPosition>this.lastScrollTop){
            this.scrolled=true;
          }
          else{
            this.scrolled=false;
          }
          this.lastScrollTop=scrollPosition;
          //console.log(this.scrolled);
        });
      });

  }
  
  //ngOnDestroy(){
  //  this.mediaSub.unsubscribe();
  //}
}

import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {
  changecard1: boolean
  changecard2: boolean
  mediaSub: Subscription;
  devicexs: boolean;
  devicelg: boolean;
  devicesm: boolean;
  devicemd: boolean;
  constructor(public route: Router, public mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias)
      this.devicexs = result.mqAlias==='xs' ? true : false
      this.devicesm = result.mqAlias==='sm' ? true : false
      this.devicelg = result.mqAlias==='lg' ? true : false
      this.devicemd = result.mqAlias==='md' ? true : false
    })
  }

  firstCardClicked(){
    this.route.navigateByUrl("/solution")
  }

  secondCardClicked(){
    this.route.navigateByUrl('/solution')
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

}

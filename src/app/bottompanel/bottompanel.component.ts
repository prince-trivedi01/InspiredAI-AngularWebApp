import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bottompanel',
  templateUrl: './bottompanel.component.html',
  styleUrls: ['./bottompanel.component.scss']
})
export class BottompanelComponent implements OnInit, OnDestroy {
  mediaSub: Subscription;
  devicexs: boolean;
  devicelg: boolean;
  devicesm: boolean;
  devicemd: boolean;
  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      //console.log(result.mqAlias)
      this.devicexs = result.mqAlias==='xs' ? true : false
      this.devicesm = result.mqAlias==='sm' ? true : false
      this.devicelg = result.mqAlias==='lg' ? true : false
      this.devicemd = result.mqAlias==='md' ? true : false
    })
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

}

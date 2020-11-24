import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss'],
})
export class SolutionComponent implements OnInit, OnDestroy {
  firsttab: boolean;
  secondTab: boolean;
  mobilefirsttab: boolean;
  mobilesecondTab: boolean;
  mediaSub: Subscription;
  devicexs: boolean;
  devicelg: boolean;
  devicesm: boolean;
  devicemd: boolean;

  constructor(
    private routerService: Router,
    public mediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
    this.firsttab = true;
    this.mobilefirsttab = true;
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        //console.log(result.mqAlias);
        this.devicexs = result.mqAlias === 'xs' ? true : false;
        this.devicesm = result.mqAlias === 'sm' ? true : false;
        this.devicelg = result.mqAlias === 'lg' ? true : false;
        this.devicemd = result.mqAlias === 'md' ? true : false;
      }
    );
  }

  onClick() {
    this.routerService.navigate(['contact-us']);
  }

  homeClicked() {
    this.secondTab = true;
    this.firsttab = false;
    this.mobilesecondTab = true;
    this.mobilefirsttab = false;
  }

  retailClicked() {
    this.secondTab = false;
    this.firsttab = true;
    this.mobilesecondTab = false;
    this.mobilefirsttab = true;
  }
  mobilehomeClicked() {
    this.mobilesecondTab = true;
    this.mobilefirsttab = false;
    this.secondTab = true;
    this.firsttab = false;
    console.log("x")
  }
  mobileRetailClicked() {
    this.mobilesecondTab = false;
    this.mobilefirsttab = true;
    this.secondTab = false;
    this.firsttab = true;
    console.log("y")
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}

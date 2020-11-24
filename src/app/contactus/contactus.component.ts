import { Component, OnInit ,OnDestroy} from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit, OnDestroy {
  mediaSub: Subscription;
  devicexs: boolean;
  panelOpenState = false;
  changecard1: boolean
  changecard2: boolean
  changecard3: boolean
  moneySymbol = "$"
  perMon = 59
  teamMon = 129
  corMon = 199
  doltoRupRate = 74.85
  constructor(public mediaObserver: MediaObserver) { 
    this.changecard1 = false;
    this.changecard2 = false;
    this.changecard3 = false;
  }
    
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias)
      this.devicexs = result.mqAlias==='xs' ? true : false
    })

    



  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

  dolToRup(){
    this.perMon = 59
    this.teamMon = 129
    this.corMon = 199
    this.perMon = this.perMon*this.doltoRupRate
    this.teamMon = this.teamMon*this.doltoRupRate
    this.corMon = this.corMon*this.doltoRupRate
    this.moneySymbol = "₹"

  }

  rupToDol(){
    this.perMon = 59
    this.teamMon = 129
    this.corMon = 199
    this.moneySymbol = "$"
  }

  submitOn(){
    console.log("clicked")
  }
}

  
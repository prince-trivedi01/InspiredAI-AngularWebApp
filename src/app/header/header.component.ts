import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private datastorageservice: DataStorageService, private routerService: Router) { }

  ngOnInit(): void {
    //Fetching all the data at the beginning of website loading
    //this.datastorageservice.fetchData();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onClick() {
    this.routerService.navigate(['contact-us']);
  }

}

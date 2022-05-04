import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { User, UserService } from '../../../core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {

  path?: string = "sign-in";

  constructor() { }
  ngOnInit(): void {
    this.path = location.pathname.replace('/', '');
  }
  ngOnDestroy(): void { }
  ngAfterViewInit(): void { 
    console.log(this.path);
  }
}

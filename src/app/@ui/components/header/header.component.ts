import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { User, UserService } from '../../../core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor() { }
  ngOnInit(): void { }
  ngOnDestroy(): void { }
  ngAfterViewInit(): void { }
}

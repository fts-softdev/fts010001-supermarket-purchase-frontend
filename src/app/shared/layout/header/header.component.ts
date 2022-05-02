import { Component, OnDestroy, OnInit } from '@angular/core';

import { User, UserService } from '../../../core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService
  ) { }

  currentUser?: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }

  ngOnDestroy(): void { }
}

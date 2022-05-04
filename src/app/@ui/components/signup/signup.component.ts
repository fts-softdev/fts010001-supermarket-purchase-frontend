import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor() { }

  /**
   * ng on init
   */
  ngOnInit(): void { }

  /**
   * ng on destroy
   */
  ngOnDestroy(): void { }

  /**
   * ng after view init
   */
  ngAfterViewInit(): void { }

  /**
   * on signup click
   */
  onSignupClick() {

  }
}

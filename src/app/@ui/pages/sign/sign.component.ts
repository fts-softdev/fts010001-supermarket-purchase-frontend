import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/@shell/services/common.service';

// models

// services

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input('isLogin') isLogin?: boolean;
  path?: string = "sign-in";

  // variable system
  subscription: Subscription[] = [];

  constructor(
    public commonService: CommonService
  ) { }

  /**
   * on init method
   */
  ngOnInit(): void {
    this.path = location.pathname.replace('/', '');
  }

  /**
   * on destroy method
   */
  ngOnDestroy(): void {
    // unsubscrible all subscription
    this.subscription.forEach(item => item.unsubscribe());
  }

  /**
   * after view init
   */
  ngAfterViewInit(): void {
    // scroll to top and left
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

}

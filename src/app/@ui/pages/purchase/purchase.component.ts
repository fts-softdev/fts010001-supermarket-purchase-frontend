import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonSerivce } from 'src/@shell/services/common.service';

// models

// services

@Component({
  selector: 'app-purchase-page',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit, OnDestroy, AfterViewInit {

  // variable system
  subscription: Subscription[] = [];

  constructor(
    public commonService: CommonSerivce
  ) { }

  /**
   * on init method
   */
  ngOnInit(): void {

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

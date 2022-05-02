import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// models

// services

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  // variable system
  subscription: Subscription[] = [];

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

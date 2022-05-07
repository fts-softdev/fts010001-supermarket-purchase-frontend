import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductRequest } from 'src/app/core/request/product.request';
import { CommonService } from '../../../../@shell/services/common.service';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input('product-data') data?: ProductRequest;

  constructor(
    public commonService: CommonService
  ) { }

  /**
   * on init
   */
  ngOnInit(): void { 
  }

  /**
   * on destroy
   */
  ngOnDestroy(): void { }

  /**
   * after view init
   */
  ngAfterViewInit(): void { }
}

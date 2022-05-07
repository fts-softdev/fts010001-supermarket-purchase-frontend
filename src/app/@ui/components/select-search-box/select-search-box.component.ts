import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CommonService } from 'src/@shell/services/common.service';
import { ProductCategoryResponse } from 'src/app/core/responses/product-category.response';
import { ProductResponse } from 'src/app/core/responses/product.response';
import { ProductCategoryService } from 'src/app/core/services/product-category.service';
import { ProductService } from 'src/app/core/services/product.service';
import { RightPurchaseComponent } from '../../pages/purchase/purchase.component';



/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'select-search-box-component',
  templateUrl: './select-search-box.component.html',
  styleUrls: ['./select-search-box.component.scss'],
})
export class SelectSearchBoxComponent implements OnInit {
  @Input('tieu-de') title?: string;
  myControl = new FormControl();

  subscriptions: Subscription[] = [];

  options: ProductCategoryResponse[] = [];
  filteredOptions?: Observable<ProductCategoryResponse[]>;
  selectedIndex?: ProductCategoryResponse;

  constructor(
    private commonService: CommonService,
    private productCategoryService: ProductCategoryService,
    private productService: ProductService,
  ) { }

  /**
   * on init
   */
  ngOnInit() {

    // this.subscriptions.push();
    this.productCategoryService.getAll().subscribe(
      (data) => {
        // set data into options
        this.options = data.map(item => new ProductCategoryResponse().fromJson(item));

        // get first value
        if (this.options.length > 0) {
          this.selectedIndex = this.options[0];
        }

        // set value change event
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),

          // mapping value refer tenNhom
          map(value => (typeof value === 'string' ? value : value.tenNhom)),

          // options
          map(name => (name ? this._filter(name) : this.options.slice())),
        );
      }
    );
  }

  /**
   * display fn
   * @param data 
   * @returns 
   */
  displayFn(data: any): string {
    return data && data.tenNhom ? data.tenNhom : '';
  }

  /**
   * filter
   * @param value 
   * @returns 
   */
  private _filter(value: any): any[] {
    let filterValue = this.commonService.cleanAccent(value.toLowerCase());

    // fitler value 
    let data = this.options.filter((option: any) => {
      let optionValue = option.tenNhom.toLowerCase();
      optionValue = this.commonService.cleanAccent(optionValue);
      return optionValue.includes(filterValue);
    });
    
    if (data.length > 0) {
      this.selectedIndex = data[0];
    }

    return data;
  }

  /**
   * on select change
   * @param $event 
   */
  onSelectChange() {
    if (this.selectedIndex && this.selectedIndex.id) {
      this.productService.getProductsByCategory(this.selectedIndex!.id!).subscribe((data: any) => {
        data = data.map((item: any) => new ProductResponse().fromJson(item));
        RightPurchaseComponent.products = data;
      });
    }
  }
}
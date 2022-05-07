import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../../../core/shared';
import { ProductCardModule } from '../../components/product-card/product-card.module';
import { SelectSearchBoxModule } from '../../components/select-search-box/select-search-box.module';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { LeftPurchaseComponent, PurchaseComponent, RightPurchaseComponent } from './purchase.component';

@NgModule({
  declarations: [
    PurchaseComponent,
    LeftPurchaseComponent,
    RightPurchaseComponent
  ],
  imports: [
    SharedModule,
    PurchaseRoutingModule,
    MatTableModule,
    SelectSearchBoxModule,
    ProductCardModule
  ],
  providers: [
    LeftPurchaseComponent
  ]
})
export class PurchaseModule { }

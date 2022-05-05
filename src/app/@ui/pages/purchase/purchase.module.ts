import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../../../shared';
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
  ],
})
export class PurchaseModule { }

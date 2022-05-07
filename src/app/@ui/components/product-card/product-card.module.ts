import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './product-card.component';

@NgModule({
    declarations: [
        ProductCardComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
    ],
    providers: [],
    exports: [ProductCardComponent],
})
export class ProductCardModule { }

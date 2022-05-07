import { NgModule } from '@angular/core';
import { AreaService } from './services/area.service';
import { ProductCategoryService } from './services/product-category.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { SharedModule } from './shared';

@NgModule({
  imports: [
    SharedModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ServerErrorInterceptor,
    //   multi: true,
    // },
    // { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    // ApiService,
    // AuthGuard,
    // JwtService,

    UserService,
    ProductService,
    ProductCategoryService,
    AreaService,
  ],
  declarations: []
})
export class CoreModule { }

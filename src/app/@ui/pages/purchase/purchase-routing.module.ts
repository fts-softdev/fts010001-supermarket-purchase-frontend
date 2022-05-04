import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent } from './purchase.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseComponent,
    // resolve: {
    //   isAuthenticated: HomeAuthResolver
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }

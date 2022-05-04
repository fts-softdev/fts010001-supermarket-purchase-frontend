import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './sign.component';

const routes: Routes = [
  {
    path: '',
    component: SignComponent,
    // resolve: {
    //   isAuthenticated: HomeAuthResolver
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignRoutingModule { }

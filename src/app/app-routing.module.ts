import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABOUT } from 'src/@shell/routes/about.route';
import { DASHBOARD } from 'src/@shell/routes/dashboard.route';
import { PURCHASE } from 'src/@shell/routes/purchase.route';
import { SIGN } from 'src/@shell/routes/sign.route';
import { STORAGE } from 'src/@shell/routes/storage.route';

const routes: Routes = [
  {
    path: '',
    redirectTo: SIGN.signin,
    pathMatch: 'full'
  },
  // sign
  {
    path: SIGN.signin,
    loadChildren: async () => (await import('./@ui/pages/sign/sign.module')).SignModule
  },
  {
    path: SIGN.signup,
    loadChildren: async () => (await import('./@ui/pages/sign/sign.module')).SignModule
  },

  // dashboard
  {
    path: DASHBOARD.root,
    loadChildren: async () => (await import('./@ui/pages/dashboard/dashboard.module')).DashboardModule
  },

  // purchase
  {
    path: PURCHASE.root,
    loadChildren: async () => (await import('./@ui/pages/purchase/purchase.module')).PurchaseModule
  },

  // storage 
  {
    path: STORAGE.root,
    loadChildren: async () => (await import('./@ui/pages/storage/storage.module')).StorageModule
  },

  // // about
  // {
  //   path: ABOUT.root,
  //   loadChildren: async () => (await import('./@ui/pages/dashboard/dashboard.module')).DashboardModule
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

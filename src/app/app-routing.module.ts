import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DASHBOARD } from 'src/@shell/routes/dashboard.route';

const routes: Routes = [
  // signin

  // signup

  // dashboard
  {
    path: DASHBOARD.root,
    loadChildren: async () => (await import('./@ui/pages/dashboard/dashboard.module')).DashboardModule
  }

  // purchase

  // storage

  // report 

  // other

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../../shared';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GraphCardModule } from '../../components/graph-card/graph-card.module';
import { LogTableModule } from '../../components/log-table/log-table.module';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    GraphCardModule,
    LogTableModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
  ]
})
export class DashboardModule { }

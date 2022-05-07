import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../../core/shared';
import { DashboardRoutingModule } from './dashboard-routing.module';
// import { GraphCardModule } from '../../components/graph-card/graph-card.module';
import { LogTableModule } from '../../components/log-table/log-table.module';
import { LineChartModule } from '../../components/line-chart/line-chart.module';
import { BarChartModule } from '../../components/bar-chart/bar-chart.module';
import { PieChartModule } from '../../components/pie-chart/pie-chart.module';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    // GraphCardModule,
    LineChartModule,
    BarChartModule,
    PieChartModule,

    LogTableModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
  ]
})
export class DashboardModule { }

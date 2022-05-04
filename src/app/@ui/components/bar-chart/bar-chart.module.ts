import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart.component';


@NgModule({
    declarations: [
        BarChartComponent,
    ],
    imports: [
        NgChartsModule
    ],
    providers: [],
    exports: [BarChartComponent],
})
export class BarChartModule { }

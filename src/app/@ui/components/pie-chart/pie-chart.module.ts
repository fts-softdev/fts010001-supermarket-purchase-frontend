import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart.component';


@NgModule({
    declarations: [
        PieChartComponent,
    ],
    imports: [
        NgChartsModule
    ],
    providers: [],
    exports: [PieChartComponent],
})
export class PieChartModule { }

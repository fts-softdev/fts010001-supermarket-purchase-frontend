import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart.component';


@NgModule({
    declarations: [
        LineChartComponent,
    ],
    imports: [
        // CommonModule,
        // MatCommonModule,
        NgChartsModule,
    ],
    providers: [],
    exports: [LineChartComponent],
})
export class LineChartModule { }

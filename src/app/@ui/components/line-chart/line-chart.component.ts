import { Component, Input, ViewChild } from '@angular/core';
import { ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  @Input('tieu-de') title?: string;

  lineChartData: any = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40].map(item=>item*1000),
        label: 'Sản phẩm 1',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90].map(item=>item*1000),
        label: 'Sản phẩm 2',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [180, 480, 770, 90, 1000, 270, 400].map(item=>item*1000),
        label: 'Sản phẩm 2',
        yAxisID: 'y-axis-1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  };

  lineChartOptions: any = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
      {
        position: 'left',
      },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

    plugins: {
      legend: { display: true },
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'x',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              position: 'center',
              enabled: true,
              color: 'orange',
              content: 'LineAnno',
              font: {
                weight: 'bold'
              }
            }
          },
        ],
      }
    }
  };

  lineChartType: ChartType = 'line';


  /**
   * generate number
   * @param i 
   * @returns 
   */
  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // /**
  //  * randomize 
  //  */
  // randomize(): void {
  //   for (let i = 0; i < this.lineChartData.datasets.length; i++) {
  //     for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
  //       this.lineChartData.datasets[i].data[j] = LineChartComponent.generateNumber(i);
  //     }
  //   }
  //   this.chart?.update();
  // }

  /**
   * chart clicked
   * @param param0 
   */
  chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  /**
   * chart hovered
   * @param param0 
   */
  chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  // /**
  //  * hide one
  //  */
  // hideOne(): void {
  //   const isHidden = this.chart?.isDatasetHidden(1);
  //   this.chart?.hideDataset(1, !isHidden);
  // }

  // /**
  //  * push one
  //  */
  // pushOne(): void {
  //   this.lineChartData.datasets.forEach((x: any, i: any) => {
  //     const num = LineChartComponent.generateNumber(i);
  //     x.data.push(num);
  //   });
  //   this.lineChartData?.labels?.push(`Label ${this.lineChartData.labels.length}`);

  //   this.chart?.update();
  // }

  // /**
  //  * change color
  //  */
  // changeColor(): void {
  //   this.lineChartData.datasets[2].borderColor = 'green';
  //   this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

  //   this.chart?.update();
  // }

  // /**
  //  * change label
  //  */
  // changeLabel(): void {
  //   if (this.lineChartData.labels) {
  //     this.lineChartData.labels[2] = ['1st Line', '2nd Line'];
  //   }

  //   this.chart?.update();
  // }
}

import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'log-table',
  templateUrl: './log-table.component.html'
})
export class LogTableComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input('tieu-de') title?: string;

  data = [
    {
      "name": "Mekky",
      "content": "Công việc 1",
      "start": "2022-05-03T16:02:18.472Z",
      "end": "2022-05-03T16:02:18.472Z"
    },
    {
      "name": "Mekky",
      "content": "Công việc 2",
      "start": "2022-05-03T16:02:18.472Z",
      "end": "2022-05-03T16:02:18.472Z"
    },
    {
      "name": "Mekky",
      "content": "Công việc 3",
      "start": "2022-05-03T16:02:18.472Z",
      "end": "2022-05-03T16:02:18.472Z"
    },
  ];

  names: string[] = [
    "name",
    "content",
    "start",
    "end",
  ];

  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.data = this.data.map((item: any) => {
      item['start'] = this.datepipe.transform(item['start'], 'dd/MM/yyyy');
      item['end'] = this.datepipe.transform(item['end'], 'dd/MM/yyyy');
      return item;
    })
  }

  ngOnDestroy(): void { }

  ngAfterViewInit(): void {

  }



}

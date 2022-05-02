import { Component } from '@angular/core';

@Component({
  selector: 'log-table',
  templateUrl: './log-table.component.html'
})
export class LogTableComponent {
  title: string = "Bảng";
  names: string[] = [
    "name",
    "side",
    "role",
  ]
  data = [
    {
      "name": "Obi Kan Kenobi",
      "side": "Light",
      "role": "Jedi"
    },
    {
      "name": "Greedo",
      "side": "South",
      "role": "Scrumbag"
    },
    {
      "name": "Darth Vader",
      "side": "Dark",
      "role": "Sith"
    },
  ]
}

import { NgModule } from '@angular/core';
import { LogTableComponent } from './log-table.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
    declarations: [
        LogTableComponent,
    ],
    imports: [
        MatTableModule
    ],
    providers: [],
    exports: [LogTableComponent],
})
export class LogTableModule { }

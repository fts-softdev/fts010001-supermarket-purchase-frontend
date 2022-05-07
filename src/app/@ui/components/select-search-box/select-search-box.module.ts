import { NgModule } from '@angular/core';
import { SelectSearchBoxComponent } from './select-search-box.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations: [
        SelectSearchBoxComponent,
    ],
    imports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatInputModule,
        CommonModule
    ],
    providers: [],
    exports: [SelectSearchBoxComponent],
})
export class SelectSearchBoxModule { }

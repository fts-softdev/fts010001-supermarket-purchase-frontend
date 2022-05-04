import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';


@NgModule({
    declarations: [
        SignupComponent,
    ],
    imports: [
        RouterModule
    ],
    providers: [],
    exports: [SignupComponent],
})
export class SignupModule { }

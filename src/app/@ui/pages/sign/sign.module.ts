import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared';
// import { GraphCardModule } from '../../components/graph-card/graph-card.module';
import { LoginModule } from '../../components/login/login.module';
import { SignupModule } from '../../components/signup/signup.module';
import { SignRoutingModule } from './sign-routing.module';
import { SignComponent } from './sign.component';

@NgModule({
  imports: [
    SharedModule,
    SignRoutingModule,

    SignupModule,
    LoginModule
  ],
  declarations: [
    SignComponent
  ]
})
export class SignModule { }

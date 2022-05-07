import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { SharedModule } from '../../../core/shared';
import { ExampleRoutingModule } from './example-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ExampleRoutingModule
  ],
  declarations: [
    ExampleComponent
  ],
  providers: [
  ]
})
export class ExampleModule {}

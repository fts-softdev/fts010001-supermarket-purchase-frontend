import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared';
import { StorageRoutingModule } from './storage-routing.module';
import { StorageComponent } from './storage.component';

@NgModule({
  declarations: [
    StorageComponent
  ],
  imports: [
    SharedModule,
    StorageRoutingModule,
  ],
})
export class StorageModule { }

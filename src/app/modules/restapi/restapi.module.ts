import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestapiRoutingModule } from './restapi-routing.module';
import { RestapiComponent } from './restapi.component';
import { EditModalComponent } from 'src/app/shared/modals/edit-modal/edit-modal.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RestapiRoutingModule
  ]
})
export class RestapiModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { DataAdministrationComponent } from './data-administration/data-administration.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DataAdministrationComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    MatButtonModule
  ]
})
export class AdministrationModule { }

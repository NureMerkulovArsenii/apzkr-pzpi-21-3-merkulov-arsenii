import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { DataAdministrationComponent } from './data-administration/data-administration.component';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    DataAdministrationComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    AdministrationRoutingModule,
    MatButtonModule
  ]
})
export class AdministrationModule { }

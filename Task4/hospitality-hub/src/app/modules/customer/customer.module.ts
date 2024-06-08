import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    TranslateModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})

export class CustomerModule { }

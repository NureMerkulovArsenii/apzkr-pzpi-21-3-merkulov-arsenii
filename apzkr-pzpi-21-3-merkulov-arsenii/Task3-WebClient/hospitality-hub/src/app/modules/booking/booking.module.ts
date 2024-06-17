import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { TranslateModule } from "@ngx-translate/core";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingListComponent } from './booking-list/booking-list.component';
import { MatNativeDateModule } from '@angular/material/core';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    BookingListComponent,
    BookingDetailsComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
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
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
  ]
})
export class BookingModule { }

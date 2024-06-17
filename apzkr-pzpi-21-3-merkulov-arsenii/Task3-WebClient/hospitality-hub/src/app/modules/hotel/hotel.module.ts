import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HotelRoutingModule} from './hotel-routing.module';
import {HotelListComponent} from './hotel-list/hotel-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    HotelListComponent,
    HotelDetailsComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class HotelModule {
}

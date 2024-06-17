import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {TranslateModule} from "@ngx-translate/core";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    RoomListComponent,
    RoomDetailsComponent
  ],
    imports: [
        CommonModule,
        RoomRoutingModule,
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
export class RoomModule { }

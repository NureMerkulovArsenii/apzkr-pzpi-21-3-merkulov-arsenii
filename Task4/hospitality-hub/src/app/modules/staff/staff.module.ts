import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffListComponent } from './staff-list/staff-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    StaffListComponent,
    StaffDetailsComponent,
    TaskDialogComponent,
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
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
  ]
})
export class StaffModule { }

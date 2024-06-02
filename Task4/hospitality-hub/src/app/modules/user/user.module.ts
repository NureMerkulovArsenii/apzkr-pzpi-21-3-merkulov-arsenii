import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserListComponent} from "./user-list/user-list.component";
import {RoleListComponent} from "./role-list/role-list.component";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatInputModule} from "@angular/material/input";
import { UserDetailsComponent } from './user-detail/user-details.component';
import { RoleDetailsComponent } from './role-details/role-details.component';


@NgModule({
  declarations: [
    UserListComponent,
    RoleListComponent,
    UserDetailsComponent,
    RoleDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
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
export class UserModule { }

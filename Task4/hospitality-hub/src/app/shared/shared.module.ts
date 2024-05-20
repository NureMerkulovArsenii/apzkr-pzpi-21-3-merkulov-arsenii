import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './app-shell/app-shell.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";
import {AccountModule} from "../modules/account/account.module";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
    declarations: [
        AppShellComponent
    ],
    exports: [
        AppShellComponent
    ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterLink,
    RouterOutlet,
    AccountModule,
    MatButtonModule,
    TranslateModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }

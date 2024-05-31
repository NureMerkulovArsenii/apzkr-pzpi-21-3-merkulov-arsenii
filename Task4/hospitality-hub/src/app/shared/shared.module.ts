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
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
    declarations: [
        AppShellComponent,
        ConfirmDialogComponent
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
        FontAwesomeModule,
        MatDialogModule,
        MatSelectModule
    ]
})
export class SharedModule { }

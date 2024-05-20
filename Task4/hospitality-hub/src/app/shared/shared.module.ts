import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './app-shell/app-shell.component';



@NgModule({
    declarations: [
        AppShellComponent
    ],
    exports: [
        AppShellComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }

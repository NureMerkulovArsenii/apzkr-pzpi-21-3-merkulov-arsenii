import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataAdministrationComponent } from './data-administration/data-administration.component';

const routes: Routes = [
  {
    path: 'data-administration',
    component: DataAdministrationComponent
  },
  {
    path: '**',
    redirectTo: 'data-administration'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';

const routes: Routes = [
  {
    path: '',
    component: StaffListComponent
  },
  {
    path: ':id',
    component: StaffDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }

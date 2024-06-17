import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoleListComponent} from "./role-list/role-list.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailsComponent} from "./user-detail/user-details.component";

const routes: Routes = [
  {
    path: 'roles',
    component: RoleListComponent
  },
  {
    path: '',
    component: UserListComponent
  },
  {
    path: ':id',
    component: UserDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

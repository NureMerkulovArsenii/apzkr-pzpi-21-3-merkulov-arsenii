import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'hotel',
    loadChildren: () => import('./modules/hotel/hotel.module').then(m => m.HotelModule),
   //canActivate: [authGuard]
  },
  {
    path: 'room',
    loadChildren: () => import('./modules/room/room.module').then(m => m.RoomModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    canActivate: [authGuard]
  },
  {
    path: 'staff',
    loadChildren: () => import('./modules/staff/staff.module').then(m => m.StaffModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

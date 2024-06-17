/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AccountService } from './services/account.service';
import { BookingService } from './services/booking.service';
import { CustomerService } from './services/customer.service';
import { DataAdministrationService } from './services/data-administration.service';
import { HospitalityHubApiService } from './services/hospitality-hub-api.service';
import { HotelService } from './services/hotel.service';
import { MenuService } from './services/menu.service';
import { RoleService } from './services/role.service';
import { RoomService } from './services/room.service';
import { StaffService } from './services/staff.service';
import { StatsService } from './services/stats.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AccountService,
    BookingService,
    CustomerService,
    DataAdministrationService,
    HospitalityHubApiService,
    HotelService,
    MenuService,
    RoleService,
    RoomService,
    StaffService,
    StatsService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}

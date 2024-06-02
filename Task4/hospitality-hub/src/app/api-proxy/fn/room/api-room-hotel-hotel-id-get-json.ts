/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoomResponse } from '../../models/room-response';

export interface ApiRoomHotelHotelIdGet$Json$Params {
  hotelId: number;
}

export function apiRoomHotelHotelIdGet$Json(http: HttpClient, rootUrl: string, params: ApiRoomHotelHotelIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RoomResponse>>> {
  const rb = new RequestBuilder(rootUrl, apiRoomHotelHotelIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('hotelId', params.hotelId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<RoomResponse>>;
    })
  );
}

apiRoomHotelHotelIdGet$Json.PATH = '/api/Room/hotel/{hotelId}';

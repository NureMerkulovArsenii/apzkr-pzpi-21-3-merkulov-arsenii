/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoomResponse } from '../../models/room-response';

export interface ApiRoomHotelIdGet$Plain$Params {
  hotelId: number;
}

export function apiRoomHotelIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiRoomHotelIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RoomResponse>>> {
  const rb = new RequestBuilder(rootUrl, apiRoomHotelIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('hotelId', params.hotelId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<RoomResponse>>;
    })
  );
}

apiRoomHotelIdGet$Plain.PATH = '/api/Room/hotel{hotelId}';

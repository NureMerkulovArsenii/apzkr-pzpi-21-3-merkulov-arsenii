/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateRoomPlaceRequest } from '../../models/update-room-place-request';

export interface ApiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut$Params {
  roomId: number;
  roomPlaceId: number;
      body?: UpdateRoomPlaceRequest
}

export function apiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut(http: HttpClient, rootUrl: string, params: ApiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut.PATH, 'put');
  if (params) {
    rb.path('roomId', params.roomId, {"style":"simple"});
    rb.path('roomPlaceId', params.roomPlaceId, {"style":"simple"});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut.PATH = '/api/Room/{roomId}/roomplace/{roomPlaceId}/update';

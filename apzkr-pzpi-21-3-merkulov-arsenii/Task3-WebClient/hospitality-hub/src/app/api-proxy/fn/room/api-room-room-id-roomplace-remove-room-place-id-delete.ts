/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete$Params {
  roomId: number;
  roomPlaceId: number;
}

export function apiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete(http: HttpClient, rootUrl: string, params: ApiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete.PATH, 'delete');
  if (params) {
    rb.path('roomId', params.roomId, {"style":"simple"});
    rb.path('roomPlaceId', params.roomPlaceId, {"style":"simple"});
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

apiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete.PATH = '/api/Room/{roomId}/roomplace/remove/{roomPlaceId}';

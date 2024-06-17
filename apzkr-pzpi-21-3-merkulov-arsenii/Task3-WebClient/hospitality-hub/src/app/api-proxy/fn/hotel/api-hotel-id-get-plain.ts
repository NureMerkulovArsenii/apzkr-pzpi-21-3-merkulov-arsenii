/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HotelResponse } from '../../models/hotel-response';

export interface ApiHotelIdGet$Plain$Params {
  id: number;
}

export function apiHotelIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiHotelIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<HotelResponse>> {
  const rb = new RequestBuilder(rootUrl, apiHotelIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<HotelResponse>;
    })
  );
}

apiHotelIdGet$Plain.PATH = '/api/Hotel/{id}';

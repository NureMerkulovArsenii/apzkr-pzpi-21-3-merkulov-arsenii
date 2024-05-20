/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReportTimeBoundaryRequest } from '../../models/report-time-boundary-request';

export interface ApiStatsOccupancyReportHotelIdPost$Params {
  hotelId: number;
      body?: ReportTimeBoundaryRequest
}

export function apiStatsOccupancyReportHotelIdPost(http: HttpClient, rootUrl: string, params: ApiStatsOccupancyReportHotelIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiStatsOccupancyReportHotelIdPost.PATH, 'post');
  if (params) {
    rb.path('hotelId', params.hotelId, {"style":"simple"});
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

apiStatsOccupancyReportHotelIdPost.PATH = '/api/Stats/occupancy-report/{hotelId}';

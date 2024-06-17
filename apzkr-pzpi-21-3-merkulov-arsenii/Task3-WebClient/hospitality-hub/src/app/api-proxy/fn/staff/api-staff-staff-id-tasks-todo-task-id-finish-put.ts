/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiStaffStaffIdTasksTodoTaskIdFinishPut$Params {
  staffId: number;
  todoTaskId: number;
  isCompleted?: boolean;
}

export function apiStaffStaffIdTasksTodoTaskIdFinishPut(http: HttpClient, rootUrl: string, params: ApiStaffStaffIdTasksTodoTaskIdFinishPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiStaffStaffIdTasksTodoTaskIdFinishPut.PATH, 'put');
  if (params) {
    rb.path('staffId', params.staffId, {"style":"simple"});
    rb.path('todoTaskId', params.todoTaskId, {"style":"simple"});
    rb.query('isCompleted', params.isCompleted, {"style":"form"});
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

apiStaffStaffIdTasksTodoTaskIdFinishPut.PATH = '/api/Staff/{staffId}/tasks/{todoTaskId}/finish';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut$Params {
  oldStaffId: number;
  todoTaskId: number;
  newStaffId: number;
}

export function apiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut(http: HttpClient, rootUrl: string, params: ApiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut.PATH, 'put');
  if (params) {
    rb.path('oldStaffId', params.oldStaffId, {"style":"simple"});
    rb.path('todoTaskId', params.todoTaskId, {"style":"simple"});
    rb.path('newStaffId', params.newStaffId, {"style":"simple"});
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

apiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut.PATH = '/api/Staff/{oldStaffId}/tasks/{todoTaskId}/reassign/{newStaffId}';

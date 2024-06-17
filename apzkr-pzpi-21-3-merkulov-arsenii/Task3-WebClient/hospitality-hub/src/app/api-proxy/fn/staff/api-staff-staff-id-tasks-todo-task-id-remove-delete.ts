/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiStaffStaffIdTasksTodoTaskIdRemoveDelete$Params {
  staffId: number;
  todoTaskId: number;
}

export function apiStaffStaffIdTasksTodoTaskIdRemoveDelete(http: HttpClient, rootUrl: string, params: ApiStaffStaffIdTasksTodoTaskIdRemoveDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiStaffStaffIdTasksTodoTaskIdRemoveDelete.PATH, 'delete');
  if (params) {
    rb.path('staffId', params.staffId, {"style":"simple"});
    rb.path('todoTaskId', params.todoTaskId, {"style":"simple"});
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

apiStaffStaffIdTasksTodoTaskIdRemoveDelete.PATH = '/api/Staff/{staffId}/tasks/{todoTaskId}/remove';

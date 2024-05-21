/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TodoTasksResponse } from '../../models/todo-tasks-response';

export interface ApiStaffStaffIdTasksGet$Plain$Params {
  staffId: number;
}

export function apiStaffStaffIdTasksGet$Plain(http: HttpClient, rootUrl: string, params: ApiStaffStaffIdTasksGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TodoTasksResponse>>> {
  const rb = new RequestBuilder(rootUrl, apiStaffStaffIdTasksGet$Plain.PATH, 'get');
  if (params) {
    rb.path('staffId', params.staffId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TodoTasksResponse>>;
    })
  );
}

apiStaffStaffIdTasksGet$Plain.PATH = '/api/Staff/{staffId}/tasks';

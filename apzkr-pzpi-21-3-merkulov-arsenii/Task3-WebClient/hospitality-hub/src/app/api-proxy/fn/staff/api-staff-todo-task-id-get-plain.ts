/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TodoTasksResponse } from '../../models/todo-tasks-response';

export interface ApiStaffTodoTaskIdGet$Plain$Params {
  todoTaskId: number;
}

export function apiStaffTodoTaskIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiStaffTodoTaskIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<TodoTasksResponse>> {
  const rb = new RequestBuilder(rootUrl, apiStaffTodoTaskIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('todoTaskId', params.todoTaskId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TodoTasksResponse>;
    })
  );
}

apiStaffTodoTaskIdGet$Plain.PATH = '/api/Staff/{todoTaskId}';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TodoTasksResponse } from '../../models/todo-tasks-response';

export interface ApiStaffTodoTaskIdGet$Json$Params {
  todoTaskId: number;
}

export function apiStaffTodoTaskIdGet$Json(http: HttpClient, rootUrl: string, params: ApiStaffTodoTaskIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<TodoTasksResponse>> {
  const rb = new RequestBuilder(rootUrl, apiStaffTodoTaskIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('todoTaskId', params.todoTaskId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TodoTasksResponse>;
    })
  );
}

apiStaffTodoTaskIdGet$Json.PATH = '/api/Staff/todoTask/{todoTaskId}';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateTodoTaskRequest } from '../../models/update-todo-task-request';

export interface ApiStaffStaffIdTasksTodoTaskIdUpdatePut$Params {
  staffId: number;
  todoTaskId: number;
      body?: UpdateTodoTaskRequest
}

export function apiStaffStaffIdTasksTodoTaskIdUpdatePut(http: HttpClient, rootUrl: string, params: ApiStaffStaffIdTasksTodoTaskIdUpdatePut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiStaffStaffIdTasksTodoTaskIdUpdatePut.PATH, 'put');
  if (params) {
    rb.path('staffId', params.staffId, {"style":"simple"});
    rb.path('todoTaskId', params.todoTaskId, {"style":"simple"});
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

apiStaffStaffIdTasksTodoTaskIdUpdatePut.PATH = '/api/Staff/{staffId}/tasks/{todoTaskId}/update';

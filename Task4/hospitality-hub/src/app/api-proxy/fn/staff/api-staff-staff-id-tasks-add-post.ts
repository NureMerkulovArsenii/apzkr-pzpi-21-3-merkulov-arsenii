/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateTodoTaskRequest } from '../../models/create-todo-task-request';

export interface ApiStaffStaffIdTasksAddPost$Params {
  staffId: number;
      body?: CreateTodoTaskRequest
}

export function apiStaffStaffIdTasksAddPost(http: HttpClient, rootUrl: string, params: ApiStaffStaffIdTasksAddPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiStaffStaffIdTasksAddPost.PATH, 'post');
  if (params) {
    rb.path('staffId', params.staffId, {"style":"simple"});
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

apiStaffStaffIdTasksAddPost.PATH = '/api/Staff/{staffId}/tasks/add';

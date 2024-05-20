/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiStaffCreatePost } from '../fn/staff/api-staff-create-post';
import { ApiStaffCreatePost$Params } from '../fn/staff/api-staff-create-post';
import { apiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut } from '../fn/staff/api-staff-old-staff-id-tasks-todo-task-id-reassign-new-staff-id-put';
import { ApiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut$Params } from '../fn/staff/api-staff-old-staff-id-tasks-todo-task-id-reassign-new-staff-id-put';
import { apiStaffStaffIdGet } from '../fn/staff/api-staff-staff-id-get';
import { ApiStaffStaffIdGet$Params } from '../fn/staff/api-staff-staff-id-get';
import { apiStaffStaffIdRemoveDelete } from '../fn/staff/api-staff-staff-id-remove-delete';
import { ApiStaffStaffIdRemoveDelete$Params } from '../fn/staff/api-staff-staff-id-remove-delete';
import { apiStaffStaffIdTasksAddPost } from '../fn/staff/api-staff-staff-id-tasks-add-post';
import { ApiStaffStaffIdTasksAddPost$Params } from '../fn/staff/api-staff-staff-id-tasks-add-post';
import { apiStaffStaffIdTasksGet } from '../fn/staff/api-staff-staff-id-tasks-get';
import { ApiStaffStaffIdTasksGet$Params } from '../fn/staff/api-staff-staff-id-tasks-get';
import { apiStaffStaffIdTasksTodoTaskIdFinishPut } from '../fn/staff/api-staff-staff-id-tasks-todo-task-id-finish-put';
import { ApiStaffStaffIdTasksTodoTaskIdFinishPut$Params } from '../fn/staff/api-staff-staff-id-tasks-todo-task-id-finish-put';
import { apiStaffStaffIdTasksTodoTaskIdRemoveDelete } from '../fn/staff/api-staff-staff-id-tasks-todo-task-id-remove-delete';
import { ApiStaffStaffIdTasksTodoTaskIdRemoveDelete$Params } from '../fn/staff/api-staff-staff-id-tasks-todo-task-id-remove-delete';
import { apiStaffStaffIdTasksTodoTaskIdUpdatePut } from '../fn/staff/api-staff-staff-id-tasks-todo-task-id-update-put';
import { ApiStaffStaffIdTasksTodoTaskIdUpdatePut$Params } from '../fn/staff/api-staff-staff-id-tasks-todo-task-id-update-put';
import { apiStaffStaffIdUpdatePut } from '../fn/staff/api-staff-staff-id-update-put';
import { ApiStaffStaffIdUpdatePut$Params } from '../fn/staff/api-staff-staff-id-update-put';

@Injectable({ providedIn: 'root' })
export class StaffService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiStaffStaffIdGet()` */
  static readonly ApiStaffStaffIdGetPath = '/api/Staff/{staffId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStaffStaffIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStaffStaffIdGet$Response(params: ApiStaffStaffIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiStaffStaffIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStaffStaffIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStaffStaffIdGet(params: ApiStaffStaffIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiStaffStaffIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiStaffCreatePost()` */
  static readonly ApiStaffCreatePostPath = '/api/Staff/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStaffCreatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStaffCreatePost$Response(params?: ApiStaffCreatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiStaffCreatePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStaffCreatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStaffCreatePost(params?: ApiStaffCreatePost$Params, context?: HttpContext): Observable<void> {
    return this.apiStaffCreatePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiStaffStaffIdUpdatePut()` */
  static readonly ApiStaffStaffIdUpdatePutPath = '/api/Staff/{staffId}/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStaffStaffIdUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStaffStaffIdUpdatePut$Response(params: ApiStaffStaffIdUpdatePut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiStaffStaffIdUpdatePut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStaffStaffIdUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStaffStaffIdUpdatePut(params: ApiStaffStaffIdUpdatePut$Params, context?: HttpContext): Observable<void> {
    return this.apiStaffStaffIdUpdatePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiStaffStaffIdRemoveDelete()` */
  static readonly ApiStaffStaffIdRemoveDeletePath = '/api/Staff/{staffId}/remove';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStaffStaffIdRemoveDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStaffStaffIdRemoveDelete$Response(params: ApiStaffStaffIdRemoveDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiStaffStaffIdRemoveDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStaffStaffIdRemoveDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStaffStaffIdRemoveDelete(params: ApiStaffStaffIdRemoveDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiStaffStaffIdRemoveDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiStaffStaffIdTasksAddPost()` */
  static readonly ApiStaffStaffIdTasksAddPostPath = '/api/Staff/{staffId}/tasks/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStaffStaffIdTasksAddPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStaffStaffIdTasksAddPost$Response(params: ApiStaffStaffIdTasksAddPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiStaffStaffIdTasksAddPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStaffStaffIdTasksAddPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStaffStaffIdTasksAddPost(params: ApiStaffStaffIdTasksAddPost$Params, context?: HttpContext): Observable<void> {
    return this.apiStaffStaffIdTasksAddPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiStaffStaffIdTasksTodoTaskIdUpdatePut()` */
  static readonly ApiStaffStaffIdTasksTodoTaskIdUpdatePutPath = '/api/Staff/{staffId}/tasks/{todoTaskId}/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStaffStaffIdTasksTodoTaskIdUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStaffStaffIdTasksTodoTaskIdUpdatePut$Response(params: ApiStaffStaffIdTasksTodoTaskIdUpdatePut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiStaffStaffIdTasksTodoTaskIdUpdatePut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStaffStaffIdTasksTodoTaskIdUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStaffStaffIdTasksTodoTaskIdUpdatePut(params: ApiStaffStaffIdTasksTodoTaskIdUpdatePut$Params, context?: HttpContext): Observable<void> {
    return this.apiStaffStaffIdTasksTodoTaskIdUpdatePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiStaffStaffIdTasksTodoTaskIdFinishPut()` */
  static readonly ApiStaffStaffIdTasksTodoTaskIdFinishPutPath = '/api/Staff/{staffId}/tasks/{todoTaskId}/finish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStaffStaffIdTasksTodoTaskIdFinishPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStaffStaffIdTasksTodoTaskIdFinishPut$Response(params: ApiStaffStaffIdTasksTodoTaskIdFinishPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiStaffStaffIdTasksTodoTaskIdFinishPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStaffStaffIdTasksTodoTaskIdFinishPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStaffStaffIdTasksTodoTaskIdFinishPut(params: ApiStaffStaffIdTasksTodoTaskIdFinishPut$Params, context?: HttpContext): Observable<void> {
    return this.apiStaffStaffIdTasksTodoTaskIdFinishPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiStaffStaffIdTasksTodoTaskIdRemoveDelete()` */
  static readonly ApiStaffStaffIdTasksTodoTaskIdRemoveDeletePath = '/api/Staff/{staffId}/tasks/{todoTaskId}/remove';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStaffStaffIdTasksTodoTaskIdRemoveDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStaffStaffIdTasksTodoTaskIdRemoveDelete$Response(params: ApiStaffStaffIdTasksTodoTaskIdRemoveDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiStaffStaffIdTasksTodoTaskIdRemoveDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStaffStaffIdTasksTodoTaskIdRemoveDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStaffStaffIdTasksTodoTaskIdRemoveDelete(params: ApiStaffStaffIdTasksTodoTaskIdRemoveDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiStaffStaffIdTasksTodoTaskIdRemoveDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiStaffStaffIdTasksGet()` */
  static readonly ApiStaffStaffIdTasksGetPath = '/api/Staff/{staffId}/tasks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStaffStaffIdTasksGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStaffStaffIdTasksGet$Response(params: ApiStaffStaffIdTasksGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiStaffStaffIdTasksGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStaffStaffIdTasksGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStaffStaffIdTasksGet(params: ApiStaffStaffIdTasksGet$Params, context?: HttpContext): Observable<void> {
    return this.apiStaffStaffIdTasksGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut()` */
  static readonly ApiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPutPath = '/api/Staff/{oldStaffId}/tasks/{todoTaskId}/reassign/{newStaffId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut$Response(params: ApiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut(params: ApiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiStaffOldStaffIdTasksTodoTaskIdReassignNewStaffIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiRoleAssignRolePost } from '../fn/role/api-role-assign-role-post';
import { ApiRoleAssignRolePost$Params } from '../fn/role/api-role-assign-role-post';
import { apiRoleCreateRolePost } from '../fn/role/api-role-create-role-post';
import { ApiRoleCreateRolePost$Params } from '../fn/role/api-role-create-role-post';
import { apiRoleDeleteRoleDelete } from '../fn/role/api-role-delete-role-delete';
import { ApiRoleDeleteRoleDelete$Params } from '../fn/role/api-role-delete-role-delete';
import { apiRoleRemoveRolePost } from '../fn/role/api-role-remove-role-post';
import { ApiRoleRemoveRolePost$Params } from '../fn/role/api-role-remove-role-post';
import { apiRoleRolesGet$Json } from '../fn/role/api-role-roles-get-json';
import { ApiRoleRolesGet$Json$Params } from '../fn/role/api-role-roles-get-json';
import { apiRoleRolesGet$Plain } from '../fn/role/api-role-roles-get-plain';
import { ApiRoleRolesGet$Plain$Params } from '../fn/role/api-role-roles-get-plain';
import { apiRoleRolesRoleIdGet$Json } from '../fn/role/api-role-roles-role-id-get-json';
import { ApiRoleRolesRoleIdGet$Json$Params } from '../fn/role/api-role-roles-role-id-get-json';
import { apiRoleRolesRoleIdGet$Plain } from '../fn/role/api-role-roles-role-id-get-plain';
import { ApiRoleRolesRoleIdGet$Plain$Params } from '../fn/role/api-role-roles-role-id-get-plain';
import { apiRoleUpdateRoleIdPatch } from '../fn/role/api-role-update-role-id-patch';
import { ApiRoleUpdateRoleIdPatch$Params } from '../fn/role/api-role-update-role-id-patch';
import { RecordResponseDto } from '../models/record-response-dto';

@Injectable({ providedIn: 'root' })
export class RoleService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiRoleAssignRolePost()` */
  static readonly ApiRoleAssignRolePostPath = '/api/Role/assign-role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleAssignRolePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoleAssignRolePost$Response(params?: ApiRoleAssignRolePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoleAssignRolePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoleAssignRolePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoleAssignRolePost(params?: ApiRoleAssignRolePost$Params, context?: HttpContext): Observable<void> {
    return this.apiRoleAssignRolePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRoleRemoveRolePost()` */
  static readonly ApiRoleRemoveRolePostPath = '/api/Role/remove-role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleRemoveRolePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoleRemoveRolePost$Response(params?: ApiRoleRemoveRolePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoleRemoveRolePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoleRemoveRolePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoleRemoveRolePost(params?: ApiRoleRemoveRolePost$Params, context?: HttpContext): Observable<void> {
    return this.apiRoleRemoveRolePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRoleCreateRolePost()` */
  static readonly ApiRoleCreateRolePostPath = '/api/Role/create-role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleCreateRolePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoleCreateRolePost$Response(params?: ApiRoleCreateRolePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoleCreateRolePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoleCreateRolePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoleCreateRolePost(params?: ApiRoleCreateRolePost$Params, context?: HttpContext): Observable<void> {
    return this.apiRoleCreateRolePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRoleDeleteRoleDelete()` */
  static readonly ApiRoleDeleteRoleDeletePath = '/api/Role/delete-role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleDeleteRoleDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoleDeleteRoleDelete$Response(params?: ApiRoleDeleteRoleDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoleDeleteRoleDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoleDeleteRoleDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoleDeleteRoleDelete(params?: ApiRoleDeleteRoleDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiRoleDeleteRoleDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRoleRolesGet()` */
  static readonly ApiRoleRolesGetPath = '/api/Role/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleRolesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleRolesGet$Plain$Response(params?: ApiRoleRolesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RecordResponseDto>>> {
    return apiRoleRolesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoleRolesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleRolesGet$Plain(params?: ApiRoleRolesGet$Plain$Params, context?: HttpContext): Observable<Array<RecordResponseDto>> {
    return this.apiRoleRolesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RecordResponseDto>>): Array<RecordResponseDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleRolesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleRolesGet$Json$Response(params?: ApiRoleRolesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RecordResponseDto>>> {
    return apiRoleRolesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoleRolesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleRolesGet$Json(params?: ApiRoleRolesGet$Json$Params, context?: HttpContext): Observable<Array<RecordResponseDto>> {
    return this.apiRoleRolesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RecordResponseDto>>): Array<RecordResponseDto> => r.body)
    );
  }

  /** Path part for operation `apiRoleRolesRoleIdGet()` */
  static readonly ApiRoleRolesRoleIdGetPath = '/api/Role/roles/{roleId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleRolesRoleIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleRolesRoleIdGet$Plain$Response(params: ApiRoleRolesRoleIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RecordResponseDto>>> {
    return apiRoleRolesRoleIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoleRolesRoleIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleRolesRoleIdGet$Plain(params: ApiRoleRolesRoleIdGet$Plain$Params, context?: HttpContext): Observable<Array<RecordResponseDto>> {
    return this.apiRoleRolesRoleIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RecordResponseDto>>): Array<RecordResponseDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleRolesRoleIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleRolesRoleIdGet$Json$Response(params: ApiRoleRolesRoleIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RecordResponseDto>>> {
    return apiRoleRolesRoleIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoleRolesRoleIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleRolesRoleIdGet$Json(params: ApiRoleRolesRoleIdGet$Json$Params, context?: HttpContext): Observable<Array<RecordResponseDto>> {
    return this.apiRoleRolesRoleIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RecordResponseDto>>): Array<RecordResponseDto> => r.body)
    );
  }

  /** Path part for operation `apiRoleUpdateRoleIdPatch()` */
  static readonly ApiRoleUpdateRoleIdPatchPath = '/api/Role/update-role/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleUpdateRoleIdPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoleUpdateRoleIdPatch$Response(params: ApiRoleUpdateRoleIdPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoleUpdateRoleIdPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoleUpdateRoleIdPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoleUpdateRoleIdPatch(params: ApiRoleUpdateRoleIdPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiRoleUpdateRoleIdPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

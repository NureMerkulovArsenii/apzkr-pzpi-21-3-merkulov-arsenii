/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiRoomCreatePost } from '../fn/room/api-room-create-post';
import { ApiRoomCreatePost$Params } from '../fn/room/api-room-create-post';
import { apiRoomIdDelete } from '../fn/room/api-room-id-delete';
import { ApiRoomIdDelete$Params } from '../fn/room/api-room-id-delete';
import { apiRoomIdGet } from '../fn/room/api-room-id-get';
import { ApiRoomIdGet$Params } from '../fn/room/api-room-id-get';
import { apiRoomRoomIdRoomplaceAddPost } from '../fn/room/api-room-room-id-roomplace-add-post';
import { ApiRoomRoomIdRoomplaceAddPost$Params } from '../fn/room/api-room-room-id-roomplace-add-post';
import { apiRoomRoomIdRoomplaceGet } from '../fn/room/api-room-room-id-roomplace-get';
import { ApiRoomRoomIdRoomplaceGet$Params } from '../fn/room/api-room-room-id-roomplace-get';
import { apiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete } from '../fn/room/api-room-room-id-roomplace-remove-room-place-id-delete';
import { ApiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete$Params } from '../fn/room/api-room-room-id-roomplace-remove-room-place-id-delete';
import { apiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut } from '../fn/room/api-room-room-id-roomplace-room-place-id-update-put';
import { ApiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut$Params } from '../fn/room/api-room-room-id-roomplace-room-place-id-update-put';
import { apiRoomRoomIdSetApiKeyPost } from '../fn/room/api-room-room-id-set-api-key-post';
import { ApiRoomRoomIdSetApiKeyPost$Params } from '../fn/room/api-room-room-id-set-api-key-post';
import { apiRoomUpdatePut } from '../fn/room/api-room-update-put';
import { ApiRoomUpdatePut$Params } from '../fn/room/api-room-update-put';

@Injectable({ providedIn: 'root' })
export class RoomService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiRoomIdGet()` */
  static readonly ApiRoomIdGetPath = '/api/Room/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoomIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoomIdGet$Response(params: ApiRoomIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoomIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoomIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoomIdGet(params: ApiRoomIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiRoomIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRoomIdDelete()` */
  static readonly ApiRoomIdDeletePath = '/api/Room/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoomIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoomIdDelete$Response(params: ApiRoomIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoomIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoomIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoomIdDelete(params: ApiRoomIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiRoomIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRoomCreatePost()` */
  static readonly ApiRoomCreatePostPath = '/api/Room/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoomCreatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoomCreatePost$Response(params?: ApiRoomCreatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoomCreatePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoomCreatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoomCreatePost(params?: ApiRoomCreatePost$Params, context?: HttpContext): Observable<void> {
    return this.apiRoomCreatePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRoomUpdatePut()` */
  static readonly ApiRoomUpdatePutPath = '/api/Room/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoomUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoomUpdatePut$Response(params?: ApiRoomUpdatePut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoomUpdatePut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoomUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoomUpdatePut(params?: ApiRoomUpdatePut$Params, context?: HttpContext): Observable<void> {
    return this.apiRoomUpdatePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRoomRoomIdRoomplaceGet()` */
  static readonly ApiRoomRoomIdRoomplaceGetPath = '/api/Room/{roomId}/roomplace';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoomRoomIdRoomplaceGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoomRoomIdRoomplaceGet$Response(params: ApiRoomRoomIdRoomplaceGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoomRoomIdRoomplaceGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoomRoomIdRoomplaceGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoomRoomIdRoomplaceGet(params: ApiRoomRoomIdRoomplaceGet$Params, context?: HttpContext): Observable<void> {
    return this.apiRoomRoomIdRoomplaceGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRoomRoomIdRoomplaceAddPost()` */
  static readonly ApiRoomRoomIdRoomplaceAddPostPath = '/api/Room/{roomId}/roomplace/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoomRoomIdRoomplaceAddPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoomRoomIdRoomplaceAddPost$Response(params: ApiRoomRoomIdRoomplaceAddPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoomRoomIdRoomplaceAddPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoomRoomIdRoomplaceAddPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoomRoomIdRoomplaceAddPost(params: ApiRoomRoomIdRoomplaceAddPost$Params, context?: HttpContext): Observable<void> {
    return this.apiRoomRoomIdRoomplaceAddPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete()` */
  static readonly ApiRoomRoomIdRoomplaceRemoveRoomPlaceIdDeletePath = '/api/Room/{roomId}/roomplace/remove/{roomPlaceId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete$Response(params: ApiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete(params: ApiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiRoomRoomIdRoomplaceRemoveRoomPlaceIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut()` */
  static readonly ApiRoomRoomIdRoomplaceRoomPlaceIdUpdatePutPath = '/api/Room/{roomId}/roomplace/{roomPlaceId}/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut$Response(params: ApiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut(params: ApiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut$Params, context?: HttpContext): Observable<void> {
    return this.apiRoomRoomIdRoomplaceRoomPlaceIdUpdatePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRoomRoomIdSetApiKeyPost()` */
  static readonly ApiRoomRoomIdSetApiKeyPostPath = '/api/Room/{roomId}/set-api-key';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoomRoomIdSetApiKeyPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoomRoomIdSetApiKeyPost$Response(params: ApiRoomRoomIdSetApiKeyPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRoomRoomIdSetApiKeyPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRoomRoomIdSetApiKeyPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoomRoomIdSetApiKeyPost(params: ApiRoomRoomIdSetApiKeyPost$Params, context?: HttpContext): Observable<void> {
    return this.apiRoomRoomIdSetApiKeyPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

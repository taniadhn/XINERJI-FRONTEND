import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CustomStorageService } from './custom-storage.service';
import { NotificationService } from './notification.service';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, of } from 'rxjs';
import { ErrorHandlerService } from '../error/error-handler.service';

export interface Options {
  payload?: any;
  auth?: boolean;
  success?: boolean;
  spinner?: boolean;
  cache?: string;
  params?: any;
  recaptcha?: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService,
    public customStorageService: CustomStorageService,
    public notification: NotificationService
  ) {}

  public RequestCreator(
    method: 'get' | 'post' | 'put' | 'delete' = 'get',
    url: string,
    options?: Options
  ): Observable<any> {
    if (options === undefined) options = { spinner: true, auth: true };
    else {
      if (options.spinner === undefined) options.spinner = true;
      if (options.auth === undefined) options.auth = true;
    }

    let headers: any = {
      'Content-Type': 'application/json; charset=utf-8',
    };

    if (options?.spinner) {
      headers = {
        ...headers,
        spinner: 'true',
      };
    }

    return this.http
      .request(method, environment.apiUrl + url, {
        body: options?.payload,
        headers,
        params: options?.params,
      })
      .pipe(
        map((result) => {
          if (options?.cache != null) {
            this.customStorageService.setCache(options?.cache, result);
          }
          return result;
        }),
        catchError(async (err) => this.errorHandler.handleHttpError(err))
      );
  }
}

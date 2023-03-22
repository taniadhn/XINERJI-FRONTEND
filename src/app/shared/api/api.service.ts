import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService, NotificationService, Options } from '../service/utils';
import * as data from './data.json';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private httpService: HttpService,
    private notificationService: NotificationService
  ) {}

  public GetCurrencyList(payload?: {
    date: string;
    currency?: string;
  }): Observable<any> {
    // return this.httpService.RequestCreator(
    //   'get', // method
    //   '/getCurrencies', // url
    //   {
    //     payload,
    //   }
    // );

    return of(data);
  }
}

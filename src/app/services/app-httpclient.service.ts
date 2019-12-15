
import { Injectable } from '@angular/core';

import { HttpClient, HttpHandler} from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { switchMap} from 'rxjs/internal/operators';

import { environment } from '../../environments/environment';

const API_URL = 'http://webjetapitest.azurewebsites.net/api/cinemaworld/';

@Injectable()
export class AppHttpClient extends HttpClient {

  constructor(handler: HttpHandler) {
    super(handler);
  }

  get(url: string): Observable<any> {
    if (url.indexOf('movie/') > 0) {
      const newURL = API_URL + 'detail';
      return this.getWithProcess(newURL);
    } else {
      return this.getWithProcess(url);
    }
  }


  // post(url: string, body: any | null, options: any = {}): Observable<any> {
  //
  //   if (environment.production) {
  //     return this.postWithProcess(url, body, options);
  //   } else {
  //     return this.getWithProcess(url);
  //   }
  // }

  postWithProcess(url: string, body: any | null, options: any): Observable<any> {
    return super.post(url, body, options).pipe(switchMap(source => {
      return of(source);
    }));
  }

  getWithProcess(url: string): Observable<any> {
    console.log('before:' + url);
    return super.get(url).pipe(switchMap(source => {
      console.log('after' + url);
      return of(source);
    }));
  }



}

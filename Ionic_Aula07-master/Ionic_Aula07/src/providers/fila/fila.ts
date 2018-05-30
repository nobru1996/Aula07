import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FilaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class FilaProvider {
  private baseURL = 'http://localhost:8080/arqsw_sdesk/'
  constructor(public http: HttpClient) {
    console.log('Hello FilaProvider Provider');
  }
  getFilas() {
    return this.http.get(this.baseURL+ 'rest/filas'); 
  }
}

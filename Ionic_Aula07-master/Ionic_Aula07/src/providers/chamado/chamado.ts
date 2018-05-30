import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

/*
  Generated class for the ChamadoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChamadoProvider {
  private baseURL = 'http://localhost:8080/arqsw_sdesk/'
  constructor(public http: Http) {
    console.log('Hello ChamadoProvider Provider');

    
  }

  getChamados(id: number) {
    return this.http.get(this.baseURL+ 'rest/chamados/idFila='+id); 
  }

  postChamados(chamado){
    let opt: RequestOptions
    let myHeaders: Headers = new Headers
    myHeaders.set('app-id', 'c2549df0');
    myHeaders.append('app-key', 'a2d31ce2ecb3c46739b7b0ebb1b45a8b');
    myHeaders.append('Content-type', 'application/json')

   

}



}

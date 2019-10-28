import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estabelecimento } from '../estabelecimentoDTO/estabelecimento';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  apiURL = 'http://localhost:9090/alelo/busca/rest/v1';

  constructor(private http: HttpClient) { }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('aleloTeste:1234')
      })
    } 

    getEstabelecimento(): Observable<Estabelecimento> {
      return this.http.get<Estabelecimento>(this.apiURL + '/estabelecimento')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    getEstabelecimentoById(id): Observable<Estabelecimento> {
      return this.http.get<Estabelecimento>(this.apiURL + '/estabelecimento/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    postEstabelecimento(estabelecimento): Observable<Estabelecimento> {
      return this.http.post<Estabelecimento>(this.apiURL + '/estabelecimento/', JSON.stringify(estabelecimento), this.httpOptions)
    }

    putEstabelecimento(id, estabelecimento): Observable<Estabelecimento>{
      return this.http.put<Estabelecimento>(this.apiURL + '/estabelecimento/' + id, JSON.stringify(estabelecimento), this.httpOptions)
    }

    deleteEstabelecimento(id): Observable<Estabelecimento>{
        return this.http.delete<Estabelecimento>(this.apiURL + '/estabelecimento/' + id)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }

    handleError(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = 'Erro Code: ${error.status}\nMessage: ${error.message}';
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
  }
}

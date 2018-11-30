import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url: String = 'http://localhost:3977/api';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  getListAdn(): Observable<any> {
    return this._http.get<any>(`${url}/mutant`);
  }
  addAdn(data): Observable<any> {
    return this._http.post<any>(`${url}/add`, data);
  }
  isMutant(adn): Observable<any> {
    return this._http.post<any>(`${url}/mutant`, adn);
  }

}

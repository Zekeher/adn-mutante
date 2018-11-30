import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url: String = 'http://localhost:3977/api';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  // Esta funcion del servicio es para obtener todas la lista de ADN
  getListAdn(): Observable<any> {
    return this._http.get<any>(`${url}/mutant`);
  }
  // Esta funcion del servicio es para registrar un nuevo ADN
  addAdn(data): Observable<any> {
    return this._http.post<any>(`${url}/add`, data);
  }
  // Esta funcion del servicio es para checkear si es mutante el ADN
  isMutant(adn): Observable<any> {
    return this._http.post<any>(`${url}/mutant`, adn);
  }

}

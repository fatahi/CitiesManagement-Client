import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { City } from '../models/city/City';
import { CreateCity } from '../models/city/CreateCity';


@Injectable({
  providedIn: 'root'
})
export class CityService {
  readonly apiUrl=`${environment.apiUrl}/City`;
  
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  getAll():Observable<City[]>{
    return this.http.get<City[]>(this.apiUrl);
  }
  
  get(id:number):Observable<City>{
    return this.http.get<City>(this.apiUrl + '/'+id);
  }
  createCity(city:CreateCity): Observable<CreateCity> {
    return this.http.post<CreateCity>(this.apiUrl, JSON.stringify(city), this.httpOptions)
  } 
  
  updateCity(id:number,city:CreateCity): Observable<CreateCity> {
    return this.http.put<CreateCity>(this.apiUrl + '/'+id, JSON.stringify(city), this.httpOptions)
  } 
  deleteCity(id:number){
    return this.http.delete<City>(this.apiUrl + '/' + id, this.httpOptions)
  } 
}

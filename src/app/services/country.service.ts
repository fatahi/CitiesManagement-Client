import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { Country } from '../models/country/Country';
import { CountryList } from '../models/country/CountryList';
import { CreateCountry } from '../models/country/CreateCountry';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  readonly apiUrl=`${environment.apiUrl}/Country`;
  
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  getAll():Observable<Country[]>{
    return this.http.get<Country[]>(this.apiUrl);
  }
  getList():Observable<CountryList[]>{
    return this.http.get<CountryList[]>(this.apiUrl);
  }
  get(id:number):Observable<Country>{
    return this.http.get<Country>(this.apiUrl + '/'+id);
  }
  createCountry(country:CreateCountry): Observable<CreateCountry> {
    return this.http.post<CreateCountry>(this.apiUrl, JSON.stringify(country), this.httpOptions)
    
  }  
  updateCountry(id:number,country:CreateCountry): Observable<CreateCountry> {
    return this.http.put<CreateCountry>(this.apiUrl + '/'+id, JSON.stringify(country), this.httpOptions)
    
  } 
  deleteCountry(id:number){
    return this.http.delete<Country>(this.apiUrl + '/' + id, this.httpOptions)
  } 
}

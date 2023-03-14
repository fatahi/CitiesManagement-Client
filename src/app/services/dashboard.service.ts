import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DashboardData } from '../models/Dashboard/DashboardData';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly apiUrl=`${environment.apiUrl}/Dashboard`;
  
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  getDashboardData():Observable<DashboardData[]>{
    return this.http.get<DashboardData[]>(this.apiUrl);
  }
}

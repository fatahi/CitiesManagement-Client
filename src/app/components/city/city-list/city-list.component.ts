import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { City } from '../../../models/city/City';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cityList: any={};
  constructor(private http:HttpClient,private cityService:CityService) { }

  ngOnInit(): void {
    this.loadCities();
  }

  // Get city list
  loadCities() {
    return this.cityService.getAll().subscribe((data: {}) => {
      this.cityList = data;
    })
  }

  //Delete city
  public deleteCity(id:number) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.cityService.deleteCity(id).subscribe(data => {
        this.loadCities()
      })
    }
  }  

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { Country } from '../../../models/country/Country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countryList: any=[];
  constructor(private http:HttpClient,private countryService:CountryService) { }

  ngOnInit(): void {
    this.loadCountries();
  }

  // Get country list
  loadCountries() {
    var cnt=this.countryService.getAll().subscribe((data: {}) => {
      this.countryList = data;
    });
    console.log(cnt);
    return this.countryService.getAll().subscribe((data: {}) => {
      this.countryList = data;
    })
  }

  //Delete country
  public deleteCountry(id:number) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.countryService.deleteCountry(id).subscribe(data => {
        this.loadCountries()
      })
    }
  }  

}

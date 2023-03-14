import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrls: ['./country-add.component.css']
})
export class CountryAddComponent implements OnInit {
  // country!:Country;
  @Input() country = { countryName: ''}
  constructor(public router: Router,private http:HttpClient,private countryService:CountryService) { }

  ngOnInit(): void {
    
  }
  submit(form:any){
     this.country.countryName=form.countryName;
    this.countryService.createCountry(this.country).subscribe((data: {}) => {
      this.router.navigate(['/countries'])
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css']
})
export class CountryEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  countryData: any = [];

  constructor(
    public router:Router,
    public countryService:CountryService,
    public actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.countryService.get(this.id).
    subscribe((data: {}) => {
      this.countryData = data;
    })
    
  }
 // Update country data
 updateCountry() {
  if(window.confirm('Are you sure, you want to update?')){
    this.countryService.updateCountry(this.id, this.countryData).subscribe(data => {
      this.router.navigate(['/countries'])
    })
  }
}
}

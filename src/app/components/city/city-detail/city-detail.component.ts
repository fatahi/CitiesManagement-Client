import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  cityData: any;

  constructor(
    public router:Router,
    public cityService:CityService,
    public actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cityService.get(this.id).
    subscribe((data: {}) => {
      this.cityData = data;
    })
  console.log('city:');
  console.log(this.cityData);
  }

}

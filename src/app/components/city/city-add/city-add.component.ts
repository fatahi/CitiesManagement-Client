import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormBuilder,  FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { CountryService } from 'src/app/services/country.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {

  readonly apiUrl=`${environment.apiUrl}/City`;
  selectCountry!:number;
  cityName!:string;
selectAttractionFactor!:number;
  form: FormGroup;
  ddlCountry= "";
  submitted = false;
  Countries: any=[];
   constructor(public fb: FormBuilder,
    private httpClient:HttpClient,
    private countryService:CountryService,
    private cityService:CityService,
    private router:Router) {
      this.form = this.fb.group({
         cityName: ['',
         [
           Validators.required,
           Validators.minLength(3),
           Validators.maxLength(64)
         ]],
         imageUrl: [null,Validators.required],
         comment:[''],
         attractionFactor:[null,Validators.required],
         countryName:[null,Validators.required]
      })
   }
   get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onReset() {
    this.submitted = false;
    this.form.reset();
}
   ngOnInit(): void {
    this.GetCountryList();
  }
  GetCountryList(){
    this.countryService.getAll().
    subscribe((data: {}) => {
      this.Countries = data;
    })
  }

   selectChangeHandler (event: any) {
    this.selectAttractionFactor = event.target.value;
  }
  selectCountryChangeHandler (event: any) {
    this.selectCountry = event.target.value;
  }
   uploadFile(event:any) {
      const file = (event.target).files[0];
      this.form.patchValue({
        imageUrl: file
      });
      this.form.get('imageUrl')!.updateValueAndValidity()
   }

   submitForm() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

      var formData: any = new FormData();
      formData.append("CountryId", this.selectCountry);
      formData.append("CityName", this.form.get('cityName')!.value);
      formData.append("ImageUrl", this.form.get('imageUrl')!.value);
      formData.append("Comment", this.form.get('comment')!.value);
      formData.append("AttractionFactor", this.selectAttractionFactor);

    this.httpClient.post(this.apiUrl, formData).subscribe(
      (response) => this.router.navigate(['/cities']),
      (error) => console.log(error)
   )
   }

}

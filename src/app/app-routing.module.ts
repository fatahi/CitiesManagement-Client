import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityAddComponent } from './components/city/city-add/city-add.component';
import { CityDetailComponent } from './components/city/city-detail/city-detail.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { CountryAddComponent } from './components/country/country-add/country-add.component';
import { CountryEditComponent } from './components/country/country-edit/country-edit.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'countries',component:CountryListComponent},
  {path:'create-country',component:CountryAddComponent},
  {path:'edit-country/:id',component:CountryEditComponent},
  {path:'cities',component:CityListComponent},
  {path:'create-city',component:CityAddComponent},
  {path:'detail-city/:id',component:CityDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

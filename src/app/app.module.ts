import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { CountryAddComponent } from './components/country/country-add/country-add.component';
import { CountryEditComponent } from './components/country/country-edit/country-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { CityAddComponent } from './components/city/city-add/city-add.component';
import { CityDetailComponent } from './components/city/city-detail/city-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryListComponent,
    CountryAddComponent,
    CountryEditComponent,
    CityListComponent,
    CityAddComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

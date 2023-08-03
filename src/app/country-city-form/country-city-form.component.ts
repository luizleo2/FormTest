import { Component } from '@angular/core';
import { CountryNode, getCountriesList } from './getCountrylist';

@Component({
  selector: 'app-country-city-form',
  templateUrl: './country-city-form.component.html',
  styleUrls: ['./country-city-form.component.css']
})
export class CountryCityFormComponent {
  countries: CountryNode;
  selectedCountry: string;
  cities: string[] = [];

  constructor() {
    this.countries = getCountriesList();
  }

  onCountryChange(country: string) {
    this.selectedCountry = country;
    this.cities = this.countries.find(c => c.name === country)?.cities || [];
  }
}

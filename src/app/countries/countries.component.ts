import { Component, Input, OnInit } from '@angular/core';
import countries from '../../assets/json/countries.json';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  
  country: string = '';
  choosenCountry: string = '';
  jsonDataResult: any;

  public countryList:{name: string; }[] = countries;

  ngOnInit(): void {
    this.jsonDataResult = countries;
    console.log(this.jsonDataResult);
  }

}

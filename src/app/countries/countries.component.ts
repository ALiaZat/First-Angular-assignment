import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  
  country: any;
  choosenCountry: any;

  constructor(private data: DataService) { }
  ngOnInit(): void {
    this.data.getCitiesAndStations().subscribe(d => {
      this.country = d;
      console.log(this.country);
    });

  }
  chooseCountry(value: any) {
    this.choosenCountry = value;
    console.log(this.choosenCountry);
  }


}

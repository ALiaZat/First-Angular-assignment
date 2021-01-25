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

  // chooseCountry(value: any) {
  //   this.choosenCountry = value;
  //   console.log(this.choosenCountry);
  // }

  chooseCountry(event: any) {
    for (let i = 0; i < this.country.length; i++) {
      if (event.target.value == this.country[i].cityName) {
        this.choosenCountry = this.country[i];
        console.log(this.choosenCountry);
      }
    }
  }

}

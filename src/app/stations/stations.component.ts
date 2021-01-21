import { Component, Inject, Input, OnInit } from '@angular/core';
import stations from '../../assets/json/countries.json';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  @Input() country: any;

  selectedStation: any;

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  chooseStation(value: any) {
    this.selectedStation = value;
    console.log(this.selectedStation);
  }

}

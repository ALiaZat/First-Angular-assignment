import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import value from '../../assets/json/countries.json';
import countries from '../../assets/json/countries.json';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  @Input() country:string = '';

  jsonDataResult: any;

  public stationList:{ name: string; station: string;}[] = countries;

  ngOnInit(): void {
    this.jsonDataResult = countries;
    console.log(this.jsonDataResult);
  }
  // isExist(){
  //   if(this.country){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  // isFound(val: string){
  //   if(this.jsonDataResult = val)
  //   return true;
  //   else
  //   return false;
  // }

  show: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  goToMarah(): void {
      this.document.location.href = 'http://alhaneny.com:8056/;stream.mp3&13202692901&duration=99999&id=scplayer&autostart=true';
  }
  goToBurg(): void {
    this.document.location.href = 'http://alhaneny.com:8056/;stream.mp3&13202692901&duration=99999&id=scplayer&autostart=true';
}

}

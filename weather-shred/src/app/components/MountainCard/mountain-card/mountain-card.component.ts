import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mountain-card',
  templateUrl: './mountain-card.component.html',
  styleUrls: ['./mountain-card.component.css']
})
@Injectable()
export class MountainCardComponent implements OnInit{
  imgUrl:string
  logoUrl:string
  @Input() mountainInfo :{title:string, location:string, currWeather:string, nextDayWeather:string, prevWeekSnowFall:string, totalSnowFall:number, imgUrl:string, logoUrl:string}
  constructor(){};
  ngOnInit(): void {
    if(this.mountainInfo){
      this.imgUrl = `../../${this.mountainInfo.imgUrl}`
      this.logoUrl = `../../${this.mountainInfo.logoUrl}`
      console.log(this.mountainInfo)
    }
      
    
  }
}

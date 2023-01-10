import { Component, OnInit,  } from '@angular/core';
import { dummyInfo } from 'src/helper';
import { MountainCardComponent } from '../../MountainCard/mountain-card/mountain-card.component';
@Component({
  selector: 'app-mountain-list',
  templateUrl: './mountain-list.component.html',
  styleUrls: ['./mountain-list.component.css']
})
export class MountainListComponent implements OnInit{
  listOfMountains:Array<{title:string, location:string, currWeather:string, nextDayWeather:string, prevWeekSnowFall:string, totalSnowFall:number, imgUrl:string, logoUrl:string}> = []

  ngOnInit(){
    this.listOfMountains=dummyInfo

  }
}

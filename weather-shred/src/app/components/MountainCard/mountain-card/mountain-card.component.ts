import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Mountain } from 'src/app/Mountain';
import { MountainService } from 'src/app/services/Mountain.service';
@Component({
  selector: 'app-mountain-card',
  templateUrl: './mountain-card.component.html',
  styleUrls: ['./mountain-card.component.css']
})
@Injectable()
export class MountainCardComponent implements OnInit{
  imgUrl:string
  logoUrl:string
  @Input() mountainInfo :Mountain;
  constructor(private mountainService:MountainService){};
  ngOnInit(): void {
    if(this.mountainInfo){
      this.imgUrl = `../../${this.mountainInfo.imgUrl}`
      this.logoUrl = `../../${this.mountainInfo.logoUrl}`

      this.mountainService.getCurrentMountainData(this.mountainInfo).subscribe((resp)=>{
        this.createCurrentWeather(resp)
       
      })

      this.mountainService.getHistoricalMountainData(this.mountainInfo).subscribe((resp) =>{
        this.getHistoricalSnowLevels(resp);
      })
      
    }
      
    
  }

  updateMountainInfo(){


  }

  createCurrentWeather(theFetchedWeather:any){
    const currentWeather = `${theFetchedWeather.current.temp_f}F, ${theFetchedWeather.current.condition.text}`;
    this.mountainInfo.currWeather = currentWeather
  }

  getHistoricalSnowLevels(theFetchedWeather:any){
     console.log(theFetchedWeather);
  }
}

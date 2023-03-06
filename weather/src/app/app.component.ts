import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { GetWeatherService } from './services/get-weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  zipCode = '02767'
  title = 'weather';
  precipitation = 0;
  currentTemp = 0;
  location = ''
  currentWind = 0
  highTemp = 0;
  lowTemp = 0;
  constructor(private weatherService:GetWeatherService){}
  ngOnInit(): void {
    this.weatherService.getWeatherBasedOnZip(this.zipCode).subscribe((resp:any)=>{
      if(resp){
        
        this.location=resp.location.name + ', ' + resp.location.region;
        this.precipitation=resp.current.precip_in;
        this.currentTemp = resp.current.temp_f;
        this.currentWind = resp.current.gust_mph
        this.highTemp=resp.forecast.forecastday[0].day.maxtemp_f
        this.lowTemp= resp.forecast.forecastday[0].day.mintemp_f
        
      }
    });

  
  }
  changeLocation(weatherData:any){
    this.location=weatherData.location.name  + ', ' + weatherData.location.region;;
    this.precipitation=weatherData.current.precip_in;
    this.currentTemp = weatherData.current.temp_f;
    this.currentWind = weatherData.current.gust_mph
    this.highTemp=weatherData.forecast.forecastday[0].day.maxtemp_f
    this.lowTemp= weatherData.forecast.forecastday[0].day.mintemp_f
  }
  onSubmit(){
    this.weatherService.getWeatherBasedOnZip(this.zipCode).subscribe((resp:any)=>{
      if(resp){
        this.changeLocation(resp)
      }
    })
  }
  generateWeekAgoDate(){
    const now = new Date();
    let weekAgo= new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
    return formatDate(weekAgo,'yyyy-MM-dd', 'en-Us')
    
  }
}

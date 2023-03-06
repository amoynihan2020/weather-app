import { inject, Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class GetWeatherService {
   
  constructor(private http:HttpClient) { }

  getWeatherBasedOnZip(zipCode:string){
    return this.http.get(`http://api.weatherapi.com/v1/forecast.json?key=bf39a5094ac44c73a5e203038230603&q=${zipCode}&aqi=no`)
  }
  getHistoricalWeatherBasedOnZip(zipCode:string,date:string) {
    return this.http.get(`http://api.weatherapi.com/v1/history.json?key=bf39a5094ac44c73a5e203038230603&q=${zipCode}&dt=${date}`)

  }
}

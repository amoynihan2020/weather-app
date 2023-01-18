import { Mountain } from "../Mountain";
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { createUrlTreeFromSnapshot } from "@angular/router";
@Injectable()
export class MountainService{
    constructor(private http: HttpClient){}
    getCurrentMountainData(theMountain:Mountain) {
        const theUrl = `http://api.weatherapi.com/v1/current.json?key=ee5843c16c6e43e6847180453231101&q=${theMountain?.zipCode}&aqi=no`
        return this.http.get(theUrl)
      
    }

    getHistoricalMountainData(theMountain:Mountain){
        const theUrl = `http://api.weatherapi.com/v1/history.json?key=ee5843c16c6e43e6847180453231101&q=${theMountain?.zipCode}&dt=2022-12-01`
        return this.http.get(theUrl)

    }
}

//http://api.weatherapi.com/v1/current.json?key=ee5843c16c6e43e6847180453231101&q=04261&aqi=no
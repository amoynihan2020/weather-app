import { Component, OnInit,  } from '@angular/core';
import { Mountain } from 'src/app/Mountain';
import { dummyInfo } from 'src/helper';
import { MountainCardComponent } from '../../MountainCard/mountain-card/mountain-card.component';
@Component({
  selector: 'app-mountain-list',
  templateUrl: './mountain-list.component.html',
  styleUrls: ['./mountain-list.component.css']
})
export class MountainListComponent implements OnInit{
  listOfMountains:Array<Mountain> = []

  ngOnInit(){
    this.listOfMountains=dummyInfo

  }
}

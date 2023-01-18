import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MountainListComponent } from './components/MountainList/mountain-list/mountain-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MountainCardComponent } from './components/MountainCard/mountain-card/mountain-card.component'; 
import { MountainService } from './services/Mountain.service';
import { MountainInfoComponent } from './mountain-info/mountain-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MountainListComponent,
    MountainCardComponent,
    MountainInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [MountainService],
  bootstrap: [AppComponent]
})
export class AppModule { }

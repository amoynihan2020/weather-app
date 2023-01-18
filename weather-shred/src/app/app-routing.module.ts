import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MountainCardComponent } from './components/MountainCard/mountain-card/mountain-card.component';
import { MountainListComponent } from './components/MountainList/mountain-list/mountain-list.component';
const routes: Routes = [
  {path:'/', component: MountainListComponent},
  //{path:'/:mountainName', component: MountainMoreInfo}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

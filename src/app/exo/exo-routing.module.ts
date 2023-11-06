import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo01Component } from './exo01/exo01.component';
import { ExoComponent } from './exo.component';
import { ChronoComponent } from './chrono/chrono.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  
  {path: "", component: ExoComponent},
  {path: "exo01", component: Exo01Component},
  {path: "chrono", component: ChronoComponent},
  {path: "shopping", component: ShoppingComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }

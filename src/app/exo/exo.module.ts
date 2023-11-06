import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { Exo01Component } from './exo01/exo01.component';
import { ChronoComponent } from './chrono/chrono.component';
import { SharedModule } from '../shared/shared.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CartComponent } from './shopping/cart/cart.component';


@NgModule({
  declarations: [
    ExoComponent,
    Exo01Component,
    ChronoComponent,
    ToDoListComponent,
    ShoppingComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }

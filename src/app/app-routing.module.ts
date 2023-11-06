import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "demo", loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)},
  {path: "exo", loadChildren: () => import('./exo/exo.module').then(m => m.ExoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

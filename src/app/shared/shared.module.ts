import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ToChronoPipe } from './pipes/to-chrono.pipe';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ToChronoPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    ToFahrenheitPipe,
    ToChronoPipe
  ]
})
export class SharedModule { }

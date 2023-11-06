import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toChrono'
})
export class ToChronoPipe implements PipeTransform {

  transform(value: number): string {
    let chrono: string = '';
    let secondes: number = (value%3600)%60;
    let minutes : number = Math.floor((value%3600)/60 );;
    let heures : number = Math.floor(value/3600);
    if (value< 60)
    {
      chrono = (secondes < 10 ? '0' : '') +secondes;
    }
    else if(value < 3600)
    {
      chrono = ((minutes < 10 ? '0' : '') + minutes)+' : '+(secondes < 10 ? '0' : '') + (secondes % 60);
    }
    else 
    {
      chrono = ((heures < 10 ? '0' : '') + heures)+' : '+(minutes < 10 ? '0' : '') + minutes + ' : '+(secondes < 10 ? '0' : '') + secondes ;
    }
    return chrono;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit'
})
export class ToFahrenheitPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

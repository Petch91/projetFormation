import { Component } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.scss']
})
export class Demo01Component {

  input: string = "default";
  etat: string ="null";
  changeState(state : string) : void{
    this.etat = state;
  }

}

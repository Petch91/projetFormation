import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent {
  etat : boolean = false;
  secondes : string = '00';
  minutes : string = '00';
  myChrono! : any;

  seconde : number = 0;
  minute : number = 0;

   start() : void
  {
    this.etat = true;
      this.myChrono = setInterval(()=>
      {
          this.seconde++;
      },1000)
  }
  
  stop() : void
  {
      clearInterval(this.myChrono);
      this.etat = false;
  }
  
  reset() : void
  {
      stop();
      this.seconde = 0;

  }
}

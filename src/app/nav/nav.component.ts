import { Component } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  links: Link[] = [
    {title : 'Demo',  children : [{title: 'Demo1', url: '/demo/demo01'},{title: 'Demo2', url: '/demo/demo02'}], IsVisible: false},
    {title : 'Exercices',  children : [{title: 'Exo1', url: '/exo/exo01'},{title: 'Chrono', url: '/exo/chrono'},{title: 'Shopping', url: '/exo/shopping'}], IsVisible: false}
  ]
  changeVisibility(nom:string) :void
  {
    console.log(nom);
    
    if(this.links.find(l => l.title === nom)?.IsVisible === false)
    {
      console.log('ok')
      this.links.find(l => l.title === nom)!.IsVisible = true;
    }
    else 
    {
      console.log('ko')
      this.links.find(l => l.title === nom)!.IsVisible = false;
    }

  }
}

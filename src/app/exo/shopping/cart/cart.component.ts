import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
@Input() list?: Product[]
@Output() removeEvent : EventEmitter<number>

constructor() {
  this.removeEvent = new EventEmitter<number>();
}
removeProduct(index : number) : void{
  this.removeEvent.next(index);
}
}

import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {

  cart? : Product[] = []
  newProduct : string = ""

  addProduct() :void
  {
    if (this.newProduct !== "") {
      let p : Product = {
        name : this.newProduct,
        quantity : 1
      };
      this.cart!.push(p!);
      this.newProduct = "";
    }

  }

  remove(index : number) : void{
    this.cart?.splice(index,1);
  }

}

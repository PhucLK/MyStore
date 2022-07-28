import { Component, OnInit, ɵɵstylePropInterpolate1 } from '@angular/core';
import Product from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = []
  totalPrice: number = 0
  quantity : number = 1
  numbers: number[]
  selected : boolean = false
  fullName:string = ''
  address:string = ''
  creditCard:string = ''
  constructor(private productService: ProductService) {
    this.numbers = Array.from({ length: 10 }, (_, i) => i + 1)
  }

  ngOnInit(): void {
    this.init()
  }

  checkOut(){
    console.log('ckicl');
    
    this.productService.checkOut()
  }
  inputChange(id:number,quantity:number){
    const existingItem = this.products.find(item => id === item.id)
    this.productService.updateProduct(existingItem!,quantity)
    this.init()
  }

  init(){
    this.products = this.productService.getCart()
    const sum = this.products.reduce((sum, p) => sum + p.price * (p.quantity! > 0 ? p.quantity! : 1), 0)
    this.totalPrice = Math.round(sum * 100) / 100
  }
}

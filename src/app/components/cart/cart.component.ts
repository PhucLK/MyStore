import { Component, OnInit } from '@angular/core';
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
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getCart()
    console.log(this.products);
    
  }

  getTotal() {
    let sum: number = 0
    this.products.forEach(p => sum + p.price)
    return sum
  }

}

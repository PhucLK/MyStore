import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product?: Product
  numbers: number[]
  quantity : number = 1
  selected : boolean = false
  constructor(private productService: ProductService) {
    this.numbers = Array.from({ length: 10 }, (_, i) => i + 1)
    this.selected = this.quantity ===  this.product?.quantity
  }

  selectHandle(quantity : number){
    this.quantity = quantity
    console.log(this.quantity);
    
  }

  ngOnInit(): void {

  }

  addProduct() {
    this.productService.addProduct(this.product!,this.quantity)
  }

  counter(i: number) {
    return new Array(i);
  }
}

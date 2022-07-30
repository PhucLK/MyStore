import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Product from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product
  @Output() addItemEvent = new EventEmitter<boolean>();

  numbers: number[]
  quantity: number = 1

  constructor(private productService: ProductService) {
    this.numbers = Array.from({ length: 10 }, (_, i) => i + 1)
  }

  ngOnInit(): void {

  }
  selectHandle(quantity: number) {
    this.quantity = quantity
    console.log(this.quantity);

  }

  addProduct() {
    this.productService.addProduct(this.product!, this.quantity)
    this.addItemEvent.emit(true);
  }

  counter(i: number) {
    return new Array(i);
  }
}

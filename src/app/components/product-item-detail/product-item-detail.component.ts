import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product?: Product
  numbers: number[]
  selected: boolean = false
  quantity : number = 1

  constructor(
    private route: ActivatedRoute,
    public productService: ProductService
  ) {
    this.selected = this.quantity === this.product?.quantity
    this.numbers = Array.from({ length: 10 }, (_, i) => i + 1)
  }

  selectHandle(quantity : number){
    this.quantity = quantity
    console.log(this.quantity);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProducts().find(p => p.id === id)
  }

  addProduct(quantity: number) {
    this.productService.addProduct(this.product!, this.quantity)
  }

}

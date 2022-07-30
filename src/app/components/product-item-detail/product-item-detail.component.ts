import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product?: Product
  numbers: number[]
  selected: boolean = false
  quantity: number = 1

  constructor(
    private toast: NgToastService,
    private route: ActivatedRoute,
    public productService: ProductService
  ) {
    this.selected = this.quantity === this.product?.quantity
    this.numbers = Array.from({ length: 10 }, (_, i) => i + 1)
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    let product
    this.productService.getProducts().subscribe(res => {
      product = res
      this.product = product.find(p => p.id === id)
    })

  }

  selectHandle(quantity: number) {
    this.quantity = quantity
    console.log(this.quantity);
  }

  addProduct(quantity: number) {
    this.productService.addProduct(this.product!, this.quantity)
    this.toast.success({ detail: "", summary: 'Item was added into cart', duration: 1000 });
  }
}

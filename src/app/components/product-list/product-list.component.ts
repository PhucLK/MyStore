import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import Product from '../../model/Product'
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private toast: NgToastService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    })

  }

  addItem() {
    this.toast.success({ detail: "", summary: 'Item was added into cart', duration: 1000 });
  }


}

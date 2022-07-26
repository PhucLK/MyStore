import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import Product from '../../model/Product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    //console.log(this.products);
    
  }

}

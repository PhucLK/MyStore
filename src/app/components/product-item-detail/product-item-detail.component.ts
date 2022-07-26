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

  constructor(
    private route: ActivatedRoute,
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProducts().find(p => p.id === id)
  }

  addProduct() {
    console.log(this.product);
    
    this.productService.addProduct(this.product!)
  }

}

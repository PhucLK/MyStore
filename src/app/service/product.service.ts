import { Injectable } from '@angular/core';
import Product from '../model/Product';
import Products from '../../assets/data.json'

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Product[]
  constructor() {
    this.products = []
  }

  getProducts(): Product[] {
    return Products
  }

  addProduct(product: Product) {
    this.products.push(product)
  }


  removeProduct(product: Product) {
    this.products.filter(p => product.id !== p.id)
  }

  getCart() {
    return this.products
  }

}

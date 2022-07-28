import { Injectable } from '@angular/core';
import Product from '../model/Product';
import Products from '../../assets/data.json'

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Product[]
  cart: Product[]
  constructor() {
    const newProducts = Products.map(element => ({
      ...element,
      quantity: 0
    }));
    this.products = newProducts
    if (localStorage.getItem("products")) {
      this.cart = JSON.parse(localStorage.getItem("products")!)
    } else {
      this.cart = []
    }
  }

  getProducts(): Product[] {
    return this.products
  }

  addProduct(product: Product, quantity: number) {
    const existingItem = this.cart.find(item => product.id === item.id)

    if (existingItem) {
      existingItem.quantity! = quantity
    } else {
      this.cart.push({ ...product, quantity: quantity })
    }
    localStorage.setItem("products", JSON.stringify(this.cart));

  }

  checkOut() {
    this.cart = []
    localStorage.removeItem("products");
  }


  updateProduct(product: Product, quantity: number) {
    const existingItem = this.cart.find(item => product.id === item.id)
    existingItem!.quantity = quantity
    localStorage.setItem("products", JSON.stringify(this.cart));
  }

  getCart() {
    return this.cart
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Product from '../model/Product';
import User from '../model/User';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  cart: Product[]
  user: User = {
    fullName: '',
    address: '',
    creditCard: '',
    total: 0
  }
  constructor(private http: HttpClient) {
    this.cart = []
  }

  ngOnInit(): void {
    if (localStorage.getItem("products")) {
      this.cart = JSON.parse(localStorage.getItem("products")!)
    } else {
      this.cart = []
    }

  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:4200/assets/data.json')
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

  removeProduct(id:number){
    const removeIndex = this.cart.findIndex(item => id === item.id)
    this.cart.splice(removeIndex,1)
    localStorage.setItem("products", JSON.stringify(this.cart));
  }

  checkOut() {
    this.cart = []
    localStorage.removeItem("products");
  }

  getUser() {
    return this.user
  }

  addUser(user: User) {
    this.user = user
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

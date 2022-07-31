import { Component, OnInit } from '@angular/core';
import Product from 'src/app/model/Product';
import User from 'src/app/model/User';
import { ProductService } from 'src/app/service/product.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  products: Product[] = []
  numbers: number[]
  user: User = {
    fullName: '',
    address: '',
    creditCard: '',
    total: 0
  }
  invalid: boolean = true
  isNotValidFullName: boolean = false
  isNotValidAddress: boolean = false
  isNotValidCreditCard: boolean = false

  constructor(
    private toast: NgToastService,
    private productService: ProductService
  ) {
    this.numbers = Array.from({ length: 10 }, (_, i) => i + 1)
  }

  ngOnInit(): void {
    this.init()
  }

  checkOut() {
    this.productService.checkOut()
    this.productService.addUser(this.user)
  }
  inputChange(id: number, quantity: number) {
    const existingItem = this.products.find(item => id === item.id)
    this.productService.updateProduct(existingItem!, quantity)
    this.init()
  }

  init() {
    this.products = this.productService.getCart()
    this.caculateTotalPrice()
  }

  caculateTotalPrice() {
    const sum = this.products.reduce((sum, p) => sum + p.price * (p.quantity! > 0 ? p.quantity! : 1), 0)
    this.user.total = Math.round(sum * 100) / 100
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id)
    this.caculateTotalPrice()
    this.toast.error({ detail: "", summary: 'Item was removed from cart', duration: 1000 });
  }

  dataChanged(event: string, type: number) {
    let isNotValidFullName: boolean = false
    let isNotValidAddress: boolean = false
    let isNotValidCreditCard: boolean = false
    if (type === 1) {
      isNotValidFullName = /\d/.test(event)
    } else if (type === 2) {
      isNotValidAddress = /\d/.test(event)
    } else if (type === 3) {
      isNotValidCreditCard = /[<>a-zA-Z]+/.test(event)
    }

    if (!isNotValidFullName && this.user.fullName !== ''
      && !isNotValidAddress && this.user.address !== ''
      && !isNotValidCreditCard && this.user.creditCard !== '') {
      this.invalid = false
    }

    this.isNotValidFullName = isNotValidFullName
    this.isNotValidAddress = isNotValidAddress
    this.isNotValidCreditCard = isNotValidCreditCard

  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  totalPrice: number = 0
  fullName: string = ''

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    const user = this.productService.getUser()
    this.totalPrice = user.total!
    this.fullName = user.fullName
  }


}

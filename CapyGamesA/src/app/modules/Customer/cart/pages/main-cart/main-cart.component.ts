import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'main-cart',
  templateUrl: 'main-cart.component.html',
  styleUrls: ['main-cart.component.css'],
})
export class MainCartComponent implements OnInit {
  cart: any;
  subtotal: number = 0;

  get isLoading() {
    return this.cartService.loading;
  }

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.getbyid();
  }

  getbyid() {
    const token = localStorage.getItem('token') + '';
    const decoded = JSON.parse(window.atob(token.split('.')[1]));
    console.log(decoded);
    /*
    console.log(token);
    const base64Url = token?.split('.')[1];
    const base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64!).split('').map(c => {
      return '% ' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    console.log(JSON.parse(jsonPayload));
    */
    this.cartService.findById(decoded.id).subscribe((data: any) => {
      this.subtotal = data.reduce((acc: any, cur: any) => {
        return acc + cur.cart_quantity * cur.game_price;
      }, 0);
      this.cart = data;
      // this.subtotal= data
      console.log(data);
    });
  }
  increment() {
    this.cart.cart_quantity++;
  }

  decrement() {
    if (this.cart.cart_quantity > 0) {
      this.cart.cart_quantity--;
    }
  }

  deleteCart(cart: any) {
    console.log(cart);
    this.cartService.deleteCart(cart.cart_id).subscribe((data) => {
      console.log(data);
      this.getbyid();
    });
  }
  pay() {}
}

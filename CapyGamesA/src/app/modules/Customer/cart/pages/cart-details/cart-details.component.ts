import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Cart } from '../../types/cart';


@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html'
})
export class CartDetailsComponent implements OnInit {
  cart: Cart = {
    id: 0,
    game_id: 0,
    cart_quantity: 0,
    customer_id: 0
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cart.id = params['id'];
      this.cart.game_id = params['game_id'];
      this.cart.cart_quantity = params['cart_quantity'];
      this.cart.customer_id = params['customer_id'];
    });
  }

}

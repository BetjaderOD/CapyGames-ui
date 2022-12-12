import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Order} from '../../types/order';

@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
})

export class GetOrderComponent implements OnInit {
  order: Order = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    totalPrice: 0,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.order.id = params['id'];
      console.log(this.order);

    });
  }

}

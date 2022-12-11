import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {order} from '../../types/order';

@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
})

export class GetOrderComponent implements OnInit {
  order: order = {
    id: 0,
    date: '',
    total: 0,
    status: '',
  }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.order.id = params['id'];
      console.log(this.order);
    });
  }
}

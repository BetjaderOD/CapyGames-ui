import { Component } from '@angular/core';

class Order {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './main-order.component.html',
  styleUrls: ['./main-order.component.css'],
})

export class OrderComponent {

  order: any;
  private router: any;
    constructor() {}
    viewOrder(
      order: Order,
    ) {
      this.router.navigate([`/order/${order.id}`]);
    }
  }

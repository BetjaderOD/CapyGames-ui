import { Component } from '@angular/core';

class Order {
  id: number = 0;
  name: string = "";
  price: number = 0;
  quantity: number = 0;
  totalPrice: number = 0;
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

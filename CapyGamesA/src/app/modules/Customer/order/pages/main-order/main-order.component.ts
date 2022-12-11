import { Component } from '@angular/core';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { OrderService } from '../../services/order.service';
import { order } from '../../types/order';

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

export class MainOrderComponent implements OnInit {

}

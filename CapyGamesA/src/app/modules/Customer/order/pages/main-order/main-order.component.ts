import { Component, OnInit, ViewChild } from '@angular/core';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { OrderService } from '../../services/order.service';
import { Order } from '../../types/order';
import {Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './main-order.component.html',
  styleUrls: ['./main-order.component.css'],
})

export class MainOrderComponent implements OnInit {

  order: any;
  displayedColumns: string[] = [
    '#',
    'name',
    'price',
    'quantity',
    'totalPrice',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  get isLoading() {
    return this.orderService.loading;
  }

  constructor(
    private readonly orderService: OrderService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private router: Router
    ) {}

  ngOnInit() {
    this.getAllOrders();
  }
  getAllOrders() {
    this.orderService.findAll().subscribe((res) => {
      this.order = new MatTableDataSource<Order>(res);
      this.orderService.loading = false;
      this.order.paginator = this.paginator;
      this.order.sort = this.sort;
    });
  }

  getOrderById(id: number) {
    this.orderService.findById(id).subscribe((res) => {
      this.orderService.order = res;
      this.orderService.edit = true;
    });
  }

  viewOrder(order: Order) {
     this.orderService.order = order;
  }
}



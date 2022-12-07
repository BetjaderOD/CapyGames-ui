import {Component} from "@angular/core";
import {LiveAnnouncer} from '@angular/cdk/a11y';

import {OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {CartService} from "../../service/cart.service";
import {MatPaginator} from '@angular/material/paginator';
import {Cart} from "../../Types/cart";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: "main-cart",
  templateUrl: "main-cart.component.html"
})
export class MainCartComponent implements OnInit {

  displayedColumns: string[] = ['id', 'game_id', 'cart_quantity', 'customer_id'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  cart!: MatTableDataSource<Cart>;


  get isLoading() {
    return this.cartService.loading;
  }

  constructor(private cartService: CartService,
              private _liveAnnouncer: LiveAnnouncer,
              private dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.getAllCart();
    this.getbyid();
   //update y delete
    this.updateCart();
    this.deleteCart();

  }

  getAllCart() {
    this.cartService.findAll().subscribe((data) => {
      this.cart = new MatTableDataSource<Cart>(data);
      this.cart.paginator = this.paginator;
      this.cart.sort = this.sort;
    });

  }

  getbyid() {
    this.cartService.findById(1).subscribe((response) => {
      //   this.cart = new MatTableDataSource<Cart>(response);
      this.cart.paginator = this.paginator;
      this.cart.sort = this.sort;
    });
  }


  updateCart() {
    this.cartService.updateCart(this.cart).subscribe((response) => {
      this.cart = new MatTableDataSource<Cart>(response);
      this.cart.paginator = this.paginator;
      this.cart.sort = this.sort;
    });
  }
  deleteCart() {
    this.cartService.deleteCart(1).subscribe((response) => {
      this.cart = new MatTableDataSource<Cart>(response);
      this.cart.paginator = this.paginator;
      this.cart.sort = this.sort;
    });
  }
}





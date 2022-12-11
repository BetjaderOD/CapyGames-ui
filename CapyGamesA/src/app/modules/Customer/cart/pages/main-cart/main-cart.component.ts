import {Component} from "@angular/core";
import {LiveAnnouncer} from '@angular/cdk/a11y';

import {OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {MatPaginator} from '@angular/material/paginator';
import {Cart} from "../../types/cart";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CartService } from "../../service/cart.service";
import { Router } from '@angular/router';


@Component({
  selector: "main-cart",
  templateUrl: "main-cart.component.html"
})
export class MainCartComponent implements OnInit {

  // displayedColumns: string[] = ['id', 'game_id', 'cart_quantity', 'customer_id'];
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  // cart!: MatTableDataSource<Cart>;

  cart: any;



  get isLoading() {
    return this.cartService.loading;
  }

  constructor(private cartService: CartService,
    private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog
    , private router: Router) {
  }


  ngOnInit(): void {
    // this.getAllCart();
    this.getbyid();
    //update y delete
    this.deleteCart();

  }
  //getallcart in console
  // getAllCart() {
  //   this.cartService.findAll().subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  // getAllCart() {
  //   this.cartService.findAll().subscribe((data) => {
  //     this.cart = new MatTableDataSource<Cart>(data);
  //     this.cart.paginator = this.paginator;
  //     this.cart.sort = this.sort;
  //   });

  // }

  //getbyid
  getbyid() {
    this.cartService.findById(1).subscribe((data: any) => {
      this.cart = data;

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
  //delete
  deleteCart() {
    this.cartService.deleteCart(6).subscribe((data) => {

    });
  }


}



import { Component } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { Cart } from '../../types/cart';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';
import { Session } from '../../../../../types/session';

@Component({
  selector: 'main-cart',
  templateUrl: 'main-cart.component.html',
})
export class MainCartComponent implements OnInit {
  cart: any;

  get isLoading() {
    return this.cartService.loading;
  }

  constructor(
    private cartService: CartService,
    private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getbyid();
    this.deleteCart();
  }

  getbyid() {
    const token = localStorage.getItem('token') + '';
    const decoded = JSON.parse(
      window.atob(token.split('.')[1])
    );

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

  deleteCart() {
    this.cartService.deleteCart(6).subscribe((data) => {});
  }
  pay() {}
}

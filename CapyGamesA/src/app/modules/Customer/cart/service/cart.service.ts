import { Injectable } from '@angular/core';
import {Cart} from "../types/cart";
import {HttpClient} from "@angular/common/http";
import {APP_URL} from "../../../../services/base-url.app";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  loading: boolean = false;
  private carts: Cart[] = [];
  cart: Cart = {
    id: 0,
    game_id: 0,
    cart_quantity: 0,
    customer_id: 0,
  }

  getCart() {
    return [...this.carts];
  }

  constructor(private http: HttpClient) {
  }

  findAll() {
    this.loading = true;
    return this.http.get<Cart[]>(`${APP_URL}/cart/`);
  }


  findById(id: number) {
    this.loading = true;
    return this.http.get<Cart>(`${APP_URL}/cart/${id}`);
  }

  updateCart(cart: Cart) {
    this.loading = true;
    return this.http.put<Cart>(`${APP_URL}/cart/${cart.id}`, cart);
  }
  deleteCart(id: number) {
    this.loading = true;
    return this.http.delete<Cart>(`${APP_URL}/cart/${id}`);
  }
  saveCart(cart: Cart) {
    this.loading = true;
    return this.http.post<Cart>(`${APP_URL}/cart/`, cart);
  }
}

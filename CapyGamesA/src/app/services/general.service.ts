import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../modules/Customer/cart/types/cart';
import { APP_URL } from './base-url.app';


@Injectable({
  providedIn: 'root',
})
export class GeneralService {
    cart: any;

  constructor(private http: HttpClient) {
    console.log('cart service');
    }
  loading: boolean = false;
  findById(id: number) {
    this.loading = true;
    return this.http.get<Cart>(`${APP_URL}cart/${id}`);
    }
    

}

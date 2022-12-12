
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Order } from '../types/order';
import { APP_URL } from 'src/app/services/base-url.app';

@Injectable({
    providedIn: 'root'
})

export class OrderService {
    loading: boolean = false;
    private ord: Order [] = [];
    edit: boolean = false;
    order: Order = {
        id: 0,
        name: '',
        price: 0,
        quantity: 0,
        totalPrice: 0,
    };

    save(order: Order) {
        return this.http.post(`${APP_URL}/orders`, order);
    }

    constructor(private http: HttpClient) {
    }

    findAll() {
        return this.http.get<Order[]>(`${APP_URL}/orders`);
    }

    findById(id: number) {
        return this.http.get<Order>(`${APP_URL}/orders/${id}`);
    }
}

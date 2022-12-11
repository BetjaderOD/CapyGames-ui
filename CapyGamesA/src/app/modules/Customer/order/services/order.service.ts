
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {order } from '../types/order';
import { APP_URL } from 'src/app/services/base-url.app';

@Injectable({
    providedIn: 'root'
})

export class OrderService {
    loading: boolean = false;
    private ord: order [] = [];
    edit: boolean = false;
    order: order = {
        id: 0,
        name: '',
        price: 0,
        quantity: 0,
        totalPrice: 0,
    };

    get order() {
        return [...this.ord];
    }

    constructor(private http: HttpClient) {
    }

    findAll() {
        return this.http.get<order[]>(`${APP_URL}/orders`);
    }

    findById(id: number) {
        return this.http.get<order>(`${APP_URL}/orders/${id}`);
    }
}

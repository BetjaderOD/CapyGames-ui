import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../types/customer';
import { APP_URL } from 'src/app/services/base-url.app';

@Injectable({
    providedIn: 'root'

})

export class CustomerService {
    loading: boolean = false;
    private people: Customer[] = [];
    customer: Customer = {
        id: 0,
        customer_name: '',
        customer_password: '',
        customer_email: '',
        customer_address: '',
        customer_phone: '',

    };

    constructor(private http: HttpClient) {
        console.log("Servicio de customer listo");

    }

    findById(id: number) {
        return this.http.get<Customer>(`${APP_URL}customers/${id}`);
    }

    get Customer() {
        return this.people
    }
}

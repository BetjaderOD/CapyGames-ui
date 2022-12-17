import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../types/customer';
import { APP_URL } from 'src/app/services/base-url.app';
import { Router } from '@angular/router';

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

    constructor(private http: HttpClient,
        private router: Router) {
        console.log("Servicio de customer listo");

    }

    findById(id: number) {
        return this.http.get<Customer>(`${APP_URL}customers/${id}`);
    }

    signUp(customer: Customer) {
        console.log(customer);
        return this.http.post<Customer>(`${APP_URL}customers/`, customer);
    }

    get Customer() {
        return this.people
    }
}

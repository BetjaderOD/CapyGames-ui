import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../../../../types/customer';
import { CustomerService } from '../../../../../services/customer.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  customer: Customer = {
    id: 0,
    customer_name: '',
    customer_password: '',
    customer_email: '',
    customer_address: '',
    customer_phone: '',
  };

  logoPath = '../../../../assets/img/capiLogo.png';

  get isLoading() {
    return this.authService.isLoading;
  }

  constructor(
    private _customerService: CustomerService,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  signup() {
    this._customerService.signUp(this.customer);
  }
}

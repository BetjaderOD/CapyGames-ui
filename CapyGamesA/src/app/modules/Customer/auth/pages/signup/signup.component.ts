import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../../../../../types/customer';
import { CustomerService } from '../../../../../services/customer.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  loading: boolean = false;
  customer: any = {
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
    private activeRoute:ActivatedRoute
  ) {
    this.activeRoute.url.subscribe(url=>{
      console.log(url[0]);
    })
  }

  signup() {
    this._customerService.signUp(this.customer);
    console.log(this.customer);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../../../../../types/customer';
import { CustomerService } from '../../../../../services/customer.service';
import { AuthService } from '../../service/auth.service';
import { LoginStateService } from 'src/app/services/login-state.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  loading: boolean = false;
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
    private loginStateService: LoginStateService,
    private activeRoute: ActivatedRoute,
  ) {
    this.activeRoute.url.subscribe(url=>{
      //console.log(url[0]);
    })
  }

  signup() {
    this.loading = true;
    this.authService.register(this.customer).subscribe((response) => {
      //console.log(response);
      this.loading = false;
      this.authService.isLoading = false;
      this.loginStateService.signinOrsignUp = true;
      this.router.navigateByUrl('/auth');
    });
  }
}

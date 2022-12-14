import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../../../../types/customer';
import { AuthService } from '../../service/auth.service';
import { CustomerRegister } from '../../types/user-register';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
})
export class SingupComponent {
  customer: CustomerRegister = {
    customer_name: '',
    customer_email: '',
    customer_password: '',
    customer_address: '',
    customer_phone: '',
  };
  logoPath = '../../../../assets/Img/capiLogo.png';
  get isLoading() {
    return this.authService.isLoading;
  }


  constructor(private authService: AuthService, private router: Router) { }


  signup() {
    this.authService.register(this.customer);
    
  }

}

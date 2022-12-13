import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLogin } from '../../types/user';
import { AuthService } from '../../service/auth.service';
import { LoginStateService } from '../../../../../services/login-state.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  customer: CustomerLogin = {
    customer_email: '',
    customer_password: '',
  };

  logoPath = '../../../../assets/Img/capiLogo.png';

  get isLoading() {
    return this.authService.isLoading;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private loginState: LoginStateService
  ) {
    this.loginState.setIsLogged = !!localStorage.getItem('token');
    if (!this.loginState.isLogged) this.router.navigateByUrl("/");
  }

  signin() {
    this.authService.login(this.customer);
  }
}

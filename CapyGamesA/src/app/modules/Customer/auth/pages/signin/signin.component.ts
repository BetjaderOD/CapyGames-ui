import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  logoPath = '../../../../assets/img/capiLogo.png';

  get isLoading() {
    return this.authService.isLoading;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private loginState: LoginStateService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.url.subscribe((url) => {
      //console.log(url[0]);
    });
    this.loginState.setIsLogged = !!localStorage.getItem('token');
    if (!this.loginState.isLogged) this.router.navigateByUrl('/');
  }

  signin() {
    this.authService.login(this.customer);
  }
  signup(){
    this.router.navigateByUrl('/signup');
    this.loginState.signinOrsignUp = false;
  }
}

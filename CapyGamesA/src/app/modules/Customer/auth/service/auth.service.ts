import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CustomerLogin } from '../types/user';
import { LoginStateService } from '../../../../services/login-state.service';
import { APP_URL } from '../../../../services/base-url.app';
import { CustomerRegister } from '../types/user-register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loading: boolean = false;
  get isLoading() {
    return this.loading;
  }

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private loginState: LoginStateService
  ) {}

  login(customer: CustomerLogin) {
    this.loading = true;
    this.httpClient
      .post<any>(APP_URL + 'auth/', customer, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        catchError((error) => {
          this.loading = false;
          return error;
        })
      )
      .subscribe((response) => {
        localStorage.setItem('token', response.token);
        this.loading = false;
        this.loginState.setIsLogged = true;
        this.router.navigateByUrl('/games');
      });
  }
  register(payload: CustomerRegister) {
    this.loading = true;
    return this.httpClient
      .post<any>(APP_URL + 'customers/', payload, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        catchError((error) => {
          this.loading = false;
          return error;
        })
      );
  }
}

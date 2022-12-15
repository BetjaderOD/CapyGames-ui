import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LoginStateService } from '../../services/login-state.service';
import { CustomerService } from '../../services/customer.service';
import { Customer } from 'src/app/types/customer';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  logoPath = '../../../../assets/img/capiLogo.png';
  get route() {
    return this.loginStateService.signinOrsignUp;
  }

  customers: Customer[] = [];

  get session() {
    return this.loginStateService.isLogged;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private loginStateService: LoginStateService,
    private readonly _customerService: CustomerService
  ) {
    this.loginStateService.setIsLogged = !!localStorage.getItem('token');
    if (this.loginStateService.setIsLogged) this.router.navigateByUrl('/auth');
  }

  logout() {
    localStorage.clear();
    this.loginStateService.setIsLogged = false;
    this.router.navigateByUrl('/auth');
  }

  findById(id: number) {
    this._customerService.findById(id).subscribe((response) => {
      this.customers = [response];
      this._customerService.loading = false;
    });
  }

  profile(customer: Customer) {
    this.findById(customer.id);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CartService } from '../../modules/Customer/cart/service/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  session:any = {
    logged: true,
  };

  logoPath = 'assets/images/logo.png';

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private cartService: CartService
  ) {
    /*this.session.logged = !!localStorage.getItem('token');
    if(!this.session.logged) this.router.navigateByUrl('/auth')
    /*
    value = null;
    !value = false;
    !!value = true;
    */
  }

  navigateToGame() {
    this.router.navigate(['/']);
  }
}

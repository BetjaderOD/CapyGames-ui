import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { MainGameComponent } from '../../modules/Customer/game/pages/main-game/main-game.component';
import { GetGameComponent } from '../../modules/Customer/game/pages/get-game/get-game.component';
import { MainCartComponent } from '../../modules/Customer/cart/pages/main-cart/main-cart.component';
import { SigninComponent } from '../../modules/Customer/auth/pages/signin/signin.component';
import { SignupComponent } from '../../modules/Customer/auth/pages/signup/signup.component';
import { MainReviewComponent } from '../../modules/Customer/review/pages/main-review/main-review.component';
import { AddReviewComponent } from '../../modules/Customer/review/pages/add-review/add-review-component';
import { MatCardImage } from '@angular/material/card';
import { MainGamesComponent } from '../../modules/admin/pages/main-games/main-games.component';

//rutas de navegacion
const routes: Routes = [
  { path: '', component: MainGameComponent, pathMatch: 'full' },
  { path: 'auth', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'games', component: MainGameComponent },
  { path: 'admin', component:MainGamesComponent},
  { path: 'games/:id', component: GetGameComponent },
  { path: 'cart', component: MainCartComponent },
  { path: 'review', component: MainReviewComponent },
  { path: 'review/:id', component: MainReviewComponent },
  { path: 'getGame', component: GetGameComponent },
  // { path: 'cart', component: Component },
  //{ path: 'orders', component: Component },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRouterModule {}

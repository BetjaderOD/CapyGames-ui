import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { MainGameComponent } from '../../modules/Customer/game/pages/main-game/main-game.component';
import { GetGameComponent } from '../../modules/Customer/game/pages/get-game/get-game.component';
import { MainCartComponent } from '../../modules/Customer/cart/pages/main-cart/main-cart.component';
import { SigninComponent } from '../../modules/Customer/auth/pages/signin/signin.component';

//rutas de navegacion
const routes: Routes = [
  { path: '', component: MainGameComponent, pathMatch: 'full' },
  { path: 'auth', component: SigninComponent },
  { path: 'games', component: MainGameComponent },
  { path: 'games/:id', component: GetGameComponent },
  { path: 'cart', component: MainCartComponent },
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

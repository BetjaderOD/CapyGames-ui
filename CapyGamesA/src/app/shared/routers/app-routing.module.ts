import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { MainGameComponent } from '../../modules/Customer/game/pages/main-game/main-game.component';
import { GetGameComponent } from '../../modules/Customer/game/pages/get-game/get-game.component';
import { MainCartComponent } from '../../modules/Customer/cart/pages/main-cart/main-cart.component';
//importar order
import { MainOrderComponent } from '../../modules/Customer/order/pages/main-order/main-order.component';
import { GetOrderComponent } from '../../modules/Customer/order/pages/get-order/get-order.component';

//rutas de navegacion
const routes: Routes = [

  { path: 'game', component: MainGameComponent },
  {path: 'cart', component: MainCartComponent},//ruta para el carrito
  { path: 'game/:id', component: GetGameComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'game' },//si no encuentra la ruta, redirige a la ruta principal
  {path: 'order', component: MainOrderComponent},
  {path: 'order/:id', component: GetOrderComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'order'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRouterModule {}

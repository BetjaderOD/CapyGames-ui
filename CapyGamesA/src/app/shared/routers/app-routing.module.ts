import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { MainGameComponent } from '../../modules/Customer/game/pages/main-game/main-game.component';
import { GetGameComponent } from '../../modules/Customer/game/pages/get-game/get-game.component';

const routes: Routes = [
  { path: 'games', component: MainGameComponent },
  { path: 'getGame', component: GetGameComponent },
  //{ path: 'cart', component: Component },
  //{ path: 'orders', component: Component },
  { path: '**', pathMatch: 'full', redirectTo: 'games'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRouterModule {}

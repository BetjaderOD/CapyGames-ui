import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { MainGameComponent } from '../../modules/Customer/game/pages/main-game/main-game.component';
import { GetGameComponent } from '../../modules/Customer/game/pages/get-game/get-game.component';
import {MainReviewComponent} from "../../modules/Customer/review/pages/main-review/main-review.component";

const routes: Routes = [
  { path: '', component: MainGameComponent, pathMatch: 'full' },
  { path: 'game', component: MainGameComponent },
  {path: 'review', component:MainReviewComponent},
  { path: '**', redirectTo: '' },
  { path:'game/:id', component: GetGameComponent},
  {path: '',component:MainReviewComponent,pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRouterModule {}

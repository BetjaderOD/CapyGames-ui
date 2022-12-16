import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGamesComponent } from './pages/main-games/main-games.component';
import { AddGamesComponent } from './pages/add-games/add-games.component';


@NgModule({
  declarations: [
MainGamesComponent,
AddGamesComponent
  ],
  imports: [
    CommonModule,
    AddGamesComponent,
    MainGamesComponent,
  ]
})
export class AdminModule { }

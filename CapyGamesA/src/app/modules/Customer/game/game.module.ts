import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGameComponent } from './pages/main-game/main-game.component';
import { materialModules } from 'src/app/types/material-modules';
import { GetGameComponent } from './pages/get-game/get-game.component';

@NgModule({
  declarations: [MainGameComponent, GetGameComponent],
  imports: [CommonModule, ...materialModules],
  exports: [MainGameComponent, GetGameComponent],
})
export class GameModule {}

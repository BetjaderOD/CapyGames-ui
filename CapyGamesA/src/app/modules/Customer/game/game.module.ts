import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainGameComponent } from "./pages/main-game/main-game.component";
import { materialModules } from "src/app/types/material-modules";

@NgModule({
    declarations: [MainGameComponent],
    imports: [CommonModule, ...materialModules]
})

export class GameModule {}

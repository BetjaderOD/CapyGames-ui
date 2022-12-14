import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {materialModules} from "../../../types/material-modules";
import { MainCartComponent } from "./pages/main-cart/main-cart.component";

import {RouterModule, Routes} from "@angular/router";


@NgModule({
  imports: [CommonModule,
      ...materialModules],
    declarations: [MainCartComponent ],
  exports: [
    MainCartComponent,

    ]
})

export class CartModule{

}

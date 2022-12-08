import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {materialModules} from "../../../types/material-modules";
import { MainCartComponent } from "./pages/main-cart/main-cart.component";


@NgModule({
    imports: [CommonModule,
      ...materialModules],
    declarations: [MainCartComponent],
    exports: [

    ]
})

export class CartModule{

}

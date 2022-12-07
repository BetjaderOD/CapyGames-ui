import {NgModule} from "@angular/core";
import {MainCartComponent} from "./pages/main-cart/main-cart-component";
import {CommonModule} from "@angular/common";
import {materialModules} from "../../../types/material-modules";


@NgModule({
    imports: [CommonModule,
      ...materialModules],
    declarations: [MainCartComponent],
    exports: [
      MainCartComponent
    ]
})

export class CartModule{

}

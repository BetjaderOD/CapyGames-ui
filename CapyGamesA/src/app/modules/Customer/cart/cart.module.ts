import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {materialModules} from "../../../types/material-modules";
import { MainCartComponent } from "./pages/main-cart/main-cart.component";
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';


@NgModule({
    imports: [CommonModule,
      ...materialModules],
    declarations: [MainCartComponent,  CartDetailsComponent],
    exports: [

    ]
})

export class CartModule{

}

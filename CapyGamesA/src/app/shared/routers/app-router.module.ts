import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../../app.component";
import {MainCartComponent} from "../../modules/Customer/cart/pages/main-cart/main-cart-component";

const routes: Routes = [
  {
    path: '',
    component: MainCartComponent,
    pathMatch: 'full',

  },
  {
    path: 'cart',
    component: MainCartComponent,
  },
  {
    path:"**",
    redirectTo:""
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRouterModule {

}

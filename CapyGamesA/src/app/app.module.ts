import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationComponent} from "./shared/navigation/navigation..component";
import {CartModule} from "./modules/Customer/cart/cart.module";

@NgModule({
  declarations: [
    AppComponent,NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './shared/routers/app-routing.module';
import { AppComponent } from './app.component';
import { materialModules } from './types/material-modules';
import { GameModule } from './modules/Customer/game/game.module';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthModule } from './modules/Customer/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

import { CartModule } from './modules/Customer/cart/cart.module';
import { RouterModule } from '@angular/router';
import { MainCartComponent } from './modules/Customer/cart/pages/main-cart/main-cart.component';
import { CartService } from './modules/Customer/cart/service/cart.service';
import { GameService } from './modules/Customer/game/services/game.service';



@NgModule({
  declarations: [AppComponent, NavigationComponent,],
import { OrderComponent } from './modules/Customer/order/pages/main-order/main-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OrderComponent
  ],

  imports: [
    BrowserModule,
    AppRouterModule,
    LayoutModule,
    BrowserAnimationsModule,
    ...materialModules,
    GameModule,
    AuthModule,
    HttpClientModule,
    CartModule,
  
  ],

  providers: [CartService,GameService],
  exports: [AppComponent, NavigationComponent],
  bootstrap: [AppComponent],
})
export class AppModule {

}

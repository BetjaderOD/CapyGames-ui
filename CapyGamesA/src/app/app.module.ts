import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './shared/routers/app-routing.module';
import { AppComponent } from './app.component';
import { materialModules } from './types/material-modules';
import { GameModule } from './modules/Customer/game/game.module';
import {ReviewModule} from "./modules/Customer/review/review.module";
import { NavigationComponent } from './shared/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthModule } from './modules/Customer/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    LayoutModule,
    BrowserAnimationsModule,
    ...materialModules,
    GameModule,
    ReviewModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [
    AppComponent,
    NavigationComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRouterModule } from './shared/routers/app-routing.module';
import { AppComponent } from './app.component';
import { materialModules } from './types/material-modules';
import { GameModule } from './modules/Customer/game/game.module';
import { ReviewModule } from './modules/Customer/review/review.module';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AuthModule } from './modules/Customer/auth/auth.module';
import { CartModule } from './modules/Customer/cart/cart.module';
import { CartService } from './modules/Customer/cart/service/cart.service';
import { GameService } from './modules/Customer/game/services/game.service';
import { ReviewService } from './modules/Customer/review/services/review.service';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MainGamesComponent } from './modules/admin/pages/main-games/main-games.component';



@NgModule({
  declarations: [AppComponent, NavigationComponent, MainGamesComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    AppRouterModule,
    LayoutModule,
    BrowserAnimationsModule,
    ...materialModules,
    GameModule,
    ReviewModule,
    AuthModule,
    HttpClientModule,
    CartModule,
  ],
  providers: [GameService, CartService, ReviewService],
  exports: [AppComponent, NavigationComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

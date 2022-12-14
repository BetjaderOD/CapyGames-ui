import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MainOrderComponent } from './pages/main-order/main-order.component';
import { GetOrderComponent } from './pages/get-order/get-order.component';
import { materialModules } from 'src/app/types/material-modules';

@NgModule({
  declarations: [MainOrderComponent, GetOrderComponent],
  imports: [CommonModule, ...materialModules],
  exports: [MainOrderComponent, GetOrderComponent],
})

export class OrderModule {}

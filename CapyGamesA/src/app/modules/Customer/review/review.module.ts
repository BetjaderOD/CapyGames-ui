import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainReviewComponent} from "./pages/main-review/main-review.component";
import { materialModules } from 'src/app/types/material-modules';

@NgModule({
  declarations: [MainReviewComponent],
  imports: [CommonModule, ...materialModules],
  exports: [MainReviewComponent],
})

export class ReviewModule{}

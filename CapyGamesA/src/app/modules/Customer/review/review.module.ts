import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainReviewComponent} from "./pages/main-review/main-review.component";
import { materialModules } from 'src/app/types/material-modules';
import {FormsModule} from "@angular/forms";
import {AddReviewComponent} from "./pages/add-review/add-review-component";

@NgModule({
  declarations: [MainReviewComponent,AddReviewComponent],
  imports: [CommonModule, ...materialModules, FormsModule],
  exports: [MainReviewComponent],
})

export class ReviewModule{}

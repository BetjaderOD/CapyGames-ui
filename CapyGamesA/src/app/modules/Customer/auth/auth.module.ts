import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SigninComponent } from './pages/signin/signin.component';
import { materialModules } from 'src/app/types/material-modules';
import { SignupComponent } from './pages/signup/signup.component';
import { AppRouterModule } from 'src/app/shared/routers/app-routing.module';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ...materialModules,
    AppRouterModule
  ],
  exports: [SigninComponent, SignupComponent]
})
export class AuthModule { }

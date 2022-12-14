import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SigninComponent } from './pages/signin/signin.component';
import { materialModules } from 'src/app/types/material-modules';
import { SingupComponent } from './pages/singup/singup.component';
import { AppRouterModule } from '../../../shared/routers/app-routing.module';



@NgModule({
  declarations: [
    SigninComponent,
    SingupComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ...materialModules,

  ],
  exports: [SigninComponent, SingupComponent]
})
export class AuthModule { }

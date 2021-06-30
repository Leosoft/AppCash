import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';



@NgModule({
  declarations: [
    FormLoginComponent,
    ForgotPassComponent,
    ResetPassComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FormLoginComponent,
    ForgotPassComponent,
    ResetPassComponent]
})
export class LoginModule { }

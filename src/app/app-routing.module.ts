import { ResetPassComponent } from './login/reset-pass/reset-pass.component';
import { ForgotPassComponent } from './login/forgot-pass/forgot-pass.component';
import { FormRegisterComponent } from './register/form-register/form-register.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { NavbarComponent } from './landing/navbar/navbar.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'home', component:MainHomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'login',component:FormLoginComponent},
  {path:'register', component:FormRegisterComponent},
  {path:'forgot-pass', component:ForgotPassComponent},
  {path:'reset-pass',component:ResetPassComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

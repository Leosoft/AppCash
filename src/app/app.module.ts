import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { LandingModule } from './landing/landing.module';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    HomeModule,
    LoginModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent,HomeModule,LandingModule,RegisterModule,LoginModule]
})
export class AppModule { }

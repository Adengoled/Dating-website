import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteNavbarComponent } from './layout/site-navbar/site-navbar.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { HomeComponent } from './landing-page/home/home.component';
import { IntroComponent } from './landing-page/intro/intro.component';
import { Reg1FormComponent } from './landing-page/reg1-form/reg1-form.component';
import { Reg2Component } from './registration2-page/reg2/reg2.component';
import { Reg2TextComponent } from './registration2-page/reg2-text/reg2-text.component';
import { Reg2FormComponent } from './registration2-page/reg2-form/reg2-form.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteNavbarComponent,
    SiteLayoutComponent,
    HomeComponent,
    IntroComponent,
    Reg1FormComponent,
    Reg2Component,
    Reg2TextComponent,
    Reg2FormComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

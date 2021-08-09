import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { HomeComponent } from './landing-page/home/home.component';
import { Reg2Component } from './registration2-page/reg2/reg2.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  //site routes
  { path: '', component: SiteLayoutComponent,
    children: [
    { path: '', component: HomeComponent, pathMatch: "full"},
    { path: 'registratie-stap2', component: Reg2Component}
    ]
  },
  { path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

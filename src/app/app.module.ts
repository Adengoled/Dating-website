import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './dashboard/search/search.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    LandingHeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'zoek-profielen', component: SearchComponent},
            { path: 'mijn-profiel', component: ProfileComponent},
            { path: 'berichten', component: MessagesComponent},
            { path: 'instellingen', component: SettingsComponent}
            ]
        },
    ]),
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

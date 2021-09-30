import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ModalRegComponent } from './modal-reg/modal-reg.component';
import { HttpClientModule} from '@angular/common/http';
import { NewComponent } from './dashboard/search/filters/new/new.component';
import { NearbyComponent } from './dashboard/search/filters/nearby/nearby.component';
import { OnlineComponent } from './dashboard/search/filters/online/online.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    LandingHeaderComponent,
    SearchComponent,
    ModalRegComponent,
    NewComponent,
    NearbyComponent,
    OnlineComponent
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
            { path: 'zoek-profielen', component: SearchComponent,
              children: [
                { path: 'nieuw', component: NewComponent},
                { path: 'dichtbij', component: NearbyComponent},
                { path: 'online', component: OnlineComponent}
              ]
            },
            { path: 'mijn-profiel', component: ProfileComponent},
            { path: 'berichten', component: MessagesComponent},
            { path: 'instellingen', component: SettingsComponent}
            ]
        },
    ]),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

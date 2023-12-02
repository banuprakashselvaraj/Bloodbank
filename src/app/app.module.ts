import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authInterceptorProviders } from './auth/auth.interceptor';

import { SharedService } from './shared.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterdonorComponent } from './registerdonor/registerdonor.component';
import { FinddonorComponent } from './finddonor/finddonor.component';
import { BloodcenterComponent } from './bloodcenter/bloodcenter.component';
import { AlldonorlistComponent } from './alldonorlist/alldonorlist.component';
import { NgToastModule } from 'ng-angular-popup';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    DashboardComponent,
    RegisterdonorComponent,
    FinddonorComponent,
    BloodcenterComponent,
    AlldonorlistComponent,
    MapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule

  ],
  providers: [SharedService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

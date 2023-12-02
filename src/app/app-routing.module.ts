import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterdonorComponent } from './registerdonor/registerdonor.component';
import { FinddonorComponent } from './finddonor/finddonor.component';
import { BloodcenterComponent } from './bloodcenter/bloodcenter.component';
import { AlldonorlistComponent } from './alldonorlist/alldonorlist.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'signup', component: SignupComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'registerdonor', component: RegisterdonorComponent },
  { path:'finddonor', component: FinddonorComponent },
  { path:'bloodcenter', component: BloodcenterComponent },
  { path:'alldonorlist', component: AlldonorlistComponent },
  { path:'map', component: MapComponent },
  { path:'', redirectTo:'/login', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

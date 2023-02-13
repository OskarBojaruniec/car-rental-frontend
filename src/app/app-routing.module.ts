import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarBookingComponent } from './components/car-booking/car-booking.component';
import { ContentComponent } from './components/content/content.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationComponent } from './components/registration/registration.component';



const routes: Routes = [
  { path: 'login', component: LoginFormComponent},
  { path: 'home', component: ContentComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'booking/:id', component: CarBookingComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

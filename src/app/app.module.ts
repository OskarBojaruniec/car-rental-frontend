import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ImageComponent } from './image/image.component';
import { HeaderComponent } from './components/header/header.component';
import { Router } from '@angular/router';
import { ContentSliderComponent } from './components/content-slider/content-slider.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'

import { CarBookingComponent } from './components/car-booking/car-booking.component';
import { CarBookingCalendarComponent } from './components/car-booking-calendar/car-booking-calendar.component';
import { MessagesComponent } from './components/messages/messages.component';

import { HttpInterceptor } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { CustomInterceptor } from 'src/custom-interceptor';
import { LoginInterceptor } from 'src/login-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ContentComponent,
    RegistrationComponent,
    ImageComponent,
    HeaderComponent,
    ContentSliderComponent,
    CarBookingComponent,
    CarBookingCalendarComponent,
    MessagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatDatepickerModule,       
    MatNativeDateModule,     
    MatFormFieldModule,   
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientXsrfModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
  {provide: HTTP_INTERCEPTORS,useClass: LoginInterceptor,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

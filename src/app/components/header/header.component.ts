import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLogged:boolean = false;

  ngOnInit(): void {
    this.switchFromSingInToLogout();
  }

  constructor(private viewportScroller: ViewportScroller,
    private router: Router,
    private authService: AuthServiceService) {}

  goAbout() {
    const about = document.getElementById("about")

    if(about != null){
      about.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
  }
  }

  goCars() {
    const cars = document.getElementById("cars")

    if(cars != null){
      cars.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
  }
  }

  goContact() {
    
    const contact = document.getElementById("contact")

    if(contact != null){
      contact.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
  }
  }

  switchFromSingInToLogout() {
    this.isLogged = this.authService.isUserLoggedIn();
  }

  logout() {
    this.authService.logout();
    location.replace("/")
    
    
  }

}

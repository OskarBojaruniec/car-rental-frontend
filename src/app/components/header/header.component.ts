import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private viewportScroller: ViewportScroller) {}

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

}

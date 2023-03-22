import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private viewportScroller: ViewportScroller) { }

  goAbout() {
    const about = document.getElementById("about")

    if (about != null) {
      about.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  goCars() {
    const cars = document.getElementById("cars")

    if (cars != null) {
      cars.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  goContact() {

    const contact = document.getElementById("contact")

    if (contact != null) {
      contact.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }
}

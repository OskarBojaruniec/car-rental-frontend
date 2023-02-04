import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../models/login-dto';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: LoginDto;

  constructor(private location: Location) {
    this.user = new LoginDto();
   }

  ngOnInit(): void {
    const contact = document.getElementById("login-form")

    if(contact != null){
      contact.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
  }
  }

  onSubmit() {
    this.location.back();
  }

}

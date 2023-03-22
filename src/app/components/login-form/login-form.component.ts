import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../models/login-dto';
import { Location } from '@angular/common';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: LoginDto;

  constructor(private location: Location,
    private router: Router,
    private authService: AuthServiceService) {
    this.user = new LoginDto();
  }

  ngOnInit(): void {
    const contact = document.getElementById("login-form")

    if (contact != null) {
      contact.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  onSubmit() {

    this.authService.login(this.user).subscribe(res => {
      if (this.authService.isUserLoggedIn) {
        this.goToHomePage();
      }
    }
    );
  }

  goToHomePage() {
    this.router.navigate(["/profile"]);
  }

}

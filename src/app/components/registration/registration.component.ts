import { Component, OnInit } from '@angular/core';
import { RegistrationDto } from '../../models/registration-dto';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: RegistrationDto

  constructor(private registrationService: RegistrationService,
    private router: Router) {
    this.user = new RegistrationDto();
   }

  ngOnInit(): void {
    const contact = document.getElementById("registration-form")

    if(contact != null){
      contact.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
  }
}

  onSubmit() {
    this.registrationService.save(this.user).subscribe(result => this.goToHomePage());
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }

}

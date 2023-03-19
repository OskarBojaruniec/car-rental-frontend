import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    let user = this.authService.getLoggedInUserName();
    console.log(user);

  }

  

 
 
}



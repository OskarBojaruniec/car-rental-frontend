import { Component, OnInit } from '@angular/core';
import { Rent } from 'src/app/models/rent';
import { AdminCrudService } from 'src/app/services/admin-crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  rentsHistoryUrl = "rents/" + sessionStorage.getItem("authenticatedUserId");
  rents: Rent[] = [];

  constructor(private crudService: AdminCrudService) { }

  ngOnInit(): void {
    this.getRents();

    const profile = document.getElementById("profile");

    if (profile != null) {
      profile.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  getRents() {
    this.crudService.getListOfItems(Rent, this.rentsHistoryUrl).subscribe(res => {

      const retrieviedResp: any[] = res;
      console.log(res);

      for (let index = 0; index < retrieviedResp.length; index++) {


        let id: number = retrieviedResp[index].id;
        let car: any = retrieviedResp[index].car;
        let userId: number = retrieviedResp[index].userId;
        let dateOfRent: any = retrieviedResp[index].dateOfRent;
        let dateOfReturn: any = retrieviedResp[index].dateOfReturn;


        this.rents.push(new Rent(id, car, userId, dateOfRent, dateOfReturn));
      }
      console.log(this.rents);
    });
  }




}

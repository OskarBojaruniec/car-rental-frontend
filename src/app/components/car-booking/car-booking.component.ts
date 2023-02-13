import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Car } from 'src/app/models/car';
import { AdminCrudService } from 'src/app/services/admin-crud.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Specification } from 'src/app/models/specification';
import { RentDto } from 'src/app/models/rent-dto';
import { HttpResponse } from '@angular/common/http';
import { MessagesService } from 'src/app/services/messages.service';



@Component({
  selector: 'app-car-booking',
  templateUrl: './car-booking.component.html',
  styleUrls: ['./car-booking.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class CarBookingComponent implements OnInit {
  
  daysToSelect: Map<number, string>;

  specification: any;
  specURL = "specifications";
  specId: any;

  dateOfRent: any;
  dateOfReturn: any;
  rentURL = "rents"
  rentToAdd: RentDto;

  car: any;
  isAnyCar = false;

  constructor(private crudService: AdminCrudService, 
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router) { }

  ngOnInit(): void {
    this.specId = this.route.snapshot.paramMap.get('id');
    this.createMapOfRentTimeOptions();
    this.getNameOfCarBySpec();
  }

  createMapOfRentTimeOptions() {
    const map = new Map<number, string>();
    map.set(1, "day");
    map.set(3, "days");
    map.set(7, "days");
    map.set(30, "days");
    this.daysToSelect = map;
  }

  getNameOfCarBySpec() {
    this.crudService.getItemById(Specification, this.specId, this.specURL)
    .subscribe(specification => this.specification = specification);
  }

  getDateOfRent($event) {
    this.dateOfRent = $event;
  }

  getDateOfReturn(event: any): void {
    const timeOfRent: any = event.target.value;
    
    const dateOfRent = new Date(this.dateOfRent);
    const dateOfReturn = new Date(this.dateOfRent);
    dateOfReturn.setDate(dateOfRent.getDate() + parseInt(timeOfRent));
   
    this.dateOfReturn = dateOfReturn.toJSON();
  }

  checkAvailability() {
    this.rentToAdd = new RentDto(this.specId, 0, 0, this.dateOfRent, this.dateOfReturn); //until security is not configured userId is hardcoded
    this.crudService.add(this.rentToAdd, "rents/check").subscribe(
      res => (this.messagesService.addPositiveMessage("Car is available in given time"), this.isAnyCar = true, this.car = res),
      err => this.messagesService.addNegativeMessage("Car is not available in given time")
    );
  }

  addNewRent() {
    
    if(this.isAnyCar == false) {
      return;
    }
    this.rentToAdd.carId = this.car.id;
    this.crudService.add(this.rentToAdd, this.rentURL).subscribe(
      res => this.messagesService.addPositiveMessage("Rent added successfully"));
  }
}

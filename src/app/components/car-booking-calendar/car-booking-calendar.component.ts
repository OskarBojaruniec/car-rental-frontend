import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Rent } from 'src/app/models/rent';
import { AdminCrudService } from 'src/app/services/admin-crud.service';

@Component({
  selector: 'app-car-booking-calendar',
  templateUrl: './car-booking-calendar.component.html',
  styleUrls: ['./car-booking-calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarBookingCalendarComponent implements OnInit {

  rentsURL = 'rents';
  receivedRents: Rent[] = []
  @Output() dateOfRent = new EventEmitter<any>();
  

  constructor(private crudService: AdminCrudService) { }

  ngOnInit(): void {
    
  }

  getDateOfRent($event): void {
    const actualDate = new Date($event.value);
    actualDate.setMinutes(actualDate.getTimezoneOffset() * -1);
    const formattedDate = actualDate.toJSON();
    this.dateOfRent.emit(formattedDate);
  }
  
 


}

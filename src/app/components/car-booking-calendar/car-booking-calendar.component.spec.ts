import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBookingCalendarComponent } from './car-booking-calendar.component';

describe('CarBookingCalendarComponent', () => {
  let component: CarBookingCalendarComponent;
  let fixture: ComponentFixture<CarBookingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarBookingCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarBookingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

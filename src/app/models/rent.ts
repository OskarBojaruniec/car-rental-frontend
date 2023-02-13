import { Car } from "./car"

export class Rent {

    id: number
    car: Car
    userId: number
    dateOfRent: any
    dateOfReturn: any

    constructor(id: number, car: Car, userId:number, dateOfRent: any, dateOfReturn: any) {
        this.id = id;
        this.car = car;
        this.userId = userId;
        this.dateOfRent = dateOfRent;
        this.dateOfReturn = dateOfReturn;
    }
}

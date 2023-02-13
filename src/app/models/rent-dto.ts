export class RentDto {

    specId: number;
    carId: number;
    userId: number;
    dateOfRent: any;
    dateOfReturn: any;

    constructor(specId: number, carId:number, userId: number, dateOfRent: any, dateOfReturn: any) {
        this.specId = specId;
        this.carId = carId
        this.userId = userId;
        this.dateOfRent = dateOfRent;
        this.dateOfReturn = dateOfReturn;
    }

    
}

import { Image } from "./image";

export class Specification {

    id: number;
    brand: string;
    model: string;
    engineCapacity: number;
    horsePower: number;
    seatsNumber: number;
    image: any;

    constructor(id: number, brand: string, model: string, engineCapacity: number, horsePower: number, seatsNumber: number, image: any) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.engineCapacity = engineCapacity;
        this.horsePower = horsePower;
        this.seatsNumber = seatsNumber;
        this.image = image;
    }
}

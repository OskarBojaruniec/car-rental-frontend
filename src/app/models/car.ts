import { Specification } from "./specification";

export class Car {

    id: number;
    licensePlate: string;
    specification: Specification;

    constructor(id: number, licensePlate: string, specification: Specification) {
        this.id = id;
        this.licensePlate = licensePlate;
        this.specification = specification;
    }
}

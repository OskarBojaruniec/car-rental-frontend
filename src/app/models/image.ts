export class Image {

    id: number;
    name: string;
    base64Data: any; 
    retrievedImage: any;

    constructor (id: number, name: string, base64Data: any, retrievedImage: string) {
        this.id = id;
        this.name = name;
        this.base64Data = base64Data;
        this.retrievedImage = retrievedImage;
    }
}

import { Component, OnInit } from '@angular/core';
import { AdminCrudService } from 'src/app/services/admin-crud.service';
import { Specification } from 'src/app/models/specification';
import { Image } from 'src/app/models/image';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-content-slider',
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.css']
})
export class ContentSliderComponent implements OnInit {

  isLoaded = false;
  // specs
  specificationURL = "specifications";
  specifications: Specification[] = [];
  specToDisplay: Specification;
  // index of specification in specification array actual displaying (wanted to have shorter version)
  actualIndex: number;
  // images
  imageURL = "images";
  images: Image[] = [];
  imageToDisplay: Image;

  constructor(private crudService: AdminCrudService) { }

  ngOnInit(): void {
    this.getSpecifications();
    this.actualIndex = 0;
  }

  getSpecifications() {
    this.crudService.getListOfItems(Specification, this.specificationURL).subscribe(res => {
      
      const retrieviedSpecResp:any[] = res;

      for (let index = 0; index < retrieviedSpecResp.length; index++) {

        let id: number = retrieviedSpecResp[index].id;
        let brand: string = retrieviedSpecResp[index].brand;
        let model: string = retrieviedSpecResp[index].model;
        let engineCapacity: number = retrieviedSpecResp[index].engineCapacity;
        let horsePower: number = retrieviedSpecResp[index].horsePower;
        let seatsNumber: number = retrieviedSpecResp[index].seatsNumber;
        let image: any = retrieviedSpecResp[index].image;
       
        this.specifications.push(new Specification(id, brand, model, engineCapacity, horsePower, seatsNumber,
          image));
      }
      this.getImages();
    });
  
  }

  displaySpecification() {
    this.specToDisplay = this.specifications[this.actualIndex];
    this.displaySpecImage();
  }

  sliderToRight() {
    this.actualIndex = this.actualIndex + 1;
    this.displaySpecification();
  }

  sliderToLeft() {

    if (this.actualIndex == 0) {
      return;
    }
    this.actualIndex = this.actualIndex - 1;
    this.displaySpecification();
  }

  getImages() {

    this.crudService.getListOfItems(Image, this.imageURL).subscribe(res => {
      const retrieveResponse:any[] = res;
      
      for (let index = 0; index < retrieveResponse.length; index++) {

        let id: number = retrieveResponse[index].id;
        let name: string = retrieveResponse[index].name;
        let base64Data: any = retrieveResponse[index].imageByte;
        let retrievedImage: string = 'data:image/jpeg;base64,' + base64Data;

        this.images.push(new Image(id, name, base64Data, retrievedImage));
      }
      this.displaySpecification();
      this.isLoaded = true;
    });
  }
  displaySpecImage() {
    for (let index = 0; index < this.images.length; index++) {

      const imageId = this.images[index].id;
      if (this.specToDisplay.image.id == imageId) {
        this.imageToDisplay = this.images[index];
      }
    }
  }
}

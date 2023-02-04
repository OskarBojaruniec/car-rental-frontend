import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../models/image';
import { AdminCrudService } from '../services/admin-crud.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private httpClient: HttpClient,
    private crudService: AdminCrudService) { }



  imageURL = "images";
  images: Image[] = [];
  selectedFile: File;
  retrievedImages: string[] = [];
  base64Data: any;
  retrieveResponse: any;
  message: string;
  imageName: any;
  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.getImages();


  }

  getImages() {

    this.crudService.getListOfItems(Image, this.imageURL).subscribe(res => {
      this.retrieveResponse = res;
    

      for (let index = 0; index < this.retrieveResponse.length; index++) {

        let id: number = this.retrieveResponse[index].id;
        let name: string = this.retrieveResponse[index].name;
        let base64Data: any = this.retrieveResponse[index].imageByte;
        let retrievedImage: string  = 'data:image/jpeg;base64,' + base64Data;

        this.images.push(new Image(id, name, base64Data, retrievedImage));
      }

      console.log(this.images);
      this.displayImages();
    });

  }
  //'data:image/jpeg;base64,'
  displayImages() {
    console.log(this.images);

    for (let index = 0; index < this.images.length; index++) {
      this.retrievedImages.push('data:image/jpeg;base64,' + this.images[index].base64Data)
    }
    
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/images', uploadImageData, { observe: 'response' })
      .subscribe((res) => {
        console.log(res)
        res.body.toString// todo get response
      }
      );
  }



}

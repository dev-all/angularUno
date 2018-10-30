import { Component, OnInit, Input } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Image } from "../../models/image";
import { ImageService } from "../../services/image.service";

@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html",
  styles: []
})
export class ImageListComponent implements OnInit {
  //variables
  //Images: Observable<Image[]>;

  selectedImage: Image;
  title = "app";
  restItems: any;
  restImages: any;

  constructor(private imageService: ImageService) {}
  // constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getIamges();
    this.getRestItems();
  }

  // Read all REST Items

  getRestItems(): void {
    this.imageService.getAll().subscribe(restItems => {
      this.restItems = restItems;
      console.log(this.restItems);
    });
  }

  getIamges(): void {
    this.imageService.getImage().subscribe(restImages => {
      this.restImages = restImages;
      console.log(this.restImages);
    });
  }

  /* ngOnInit() {

   this.images = this.imageService.getImagesResponse();    
    
    //this.images = this.imageService.getImages();
 this.imageService.getImages()
    .subscribe((data: Image) => this.images = {
        id: data['id'],
        titulo:  data['titulo'],
        descripcion: data['descripcion'],
        thumbnail: data['thumbnail'],
        imageLink: data['imageLink'],
        
    });
}*/

  onSelect(image: Image) {
    this.selectedImage = image;
  }
}

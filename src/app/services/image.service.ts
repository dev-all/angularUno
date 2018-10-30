import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Image } from "../models/image";
import { catchError, map, tap } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {Observable} from 'rxjs'
import { Response } from "selenium-webdriver/http";

@Injectable({
  providedIn: 'root',
})

export class ImageService {

  protected url : string  =    "http://localhost:7070/BackendLaravel/public/api/v1/images";
  protected root_url : string  = "https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts"
  //images: Observable<Image[]>;

  constructor(private http: HttpClient,   
       public sanitizer: DomSanitizer
    ) {}
  
  
  // Rest Items Service: Read all REST Items
  getAll() {
    return this.http
      .get<any[]>(this.root_url)
      .pipe(map(data => data));
  }

  getImage(): Observable<Image[]>{
    return this.http
    .get<Image[]>(this.url);
   //.pipe(map(data =>data));
  }


}
  
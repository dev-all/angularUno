import { Component, OnInit ,Input } from '@angular/core';
import {Image} from '../../models/image';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: [`
    img {
      -webkit-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
      box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
      margin-bottom:10px;
    }
    
    img:hover {
      filter: gray;
      -webkit-filter: grayscale(1); 
    } 
    a:hover{ cursor:pointer;}
    `]
})
export class ImageComponent implements OnInit {
   //se obtiene el valor de otro componente en este caso d image-list
  @Input() image:Image;

  constructor() { }

  ngOnInit() {
  }

}

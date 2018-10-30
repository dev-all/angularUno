import { Component, OnInit, Input } from '@angular/core';
import {Image} from '../../models/image';
@Component({
  selector: 'app-image-detalle',
  templateUrl: './image-detalle.component.html',
  styleUrls: ['./image-detalle.component.css']
})
export class ImageDetalleComponent implements OnInit {

  @Input() selectedImage:Image;
  
  constructor() { }

  ngOnInit() {

  }

}

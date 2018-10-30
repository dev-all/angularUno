import {routes} from "./app.routes";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ImageService} from './services/image.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdNavComponent } from './md-nav/md-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
   MatIconModule, MatListModule ,MatMenuModule} from '@angular/material';
import { MdTopMenuComponent } from './md-top-menu/md-top-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ImageListComponent } from './galeria/image-list/image-list.component';
import { ImageComponent } from './galeria/image-list/image.component';
import { ImageDetalleComponent } from './galeria/image-detalle/image-detalle.component';
import { ContactComponent } from './contact/contact.component';
import { NosotrosComponent } from './nosotros/nosotros.component';




@NgModule({
  declarations: [
    AppComponent,
    MdNavComponent,
    MdTopMenuComponent,
    NavbarComponent,
    GaleriaComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetalleComponent,
    ContactComponent,
    NosotrosComponent
  ],
  imports: [
    routes,
    BrowserModule,   
    HttpClientModule, 
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule

  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

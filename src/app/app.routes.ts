import {Routes, RouterModule} from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactComponent } from './contact/contact.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import {ModuleWithProviders} from "@angular/core";


const appRoutes: Routes = [
  {path:'',redirectTo:'/galeria',pathMatch:'full'}
  ,{path:'galeria',component:GaleriaComponent}
  ,{path:'contact',component:ContactComponent}
  ,{path:'nosotros',component:NosotrosComponent}
];


export const routes: ModuleWithProviders= RouterModule.forRoot(appRoutes)
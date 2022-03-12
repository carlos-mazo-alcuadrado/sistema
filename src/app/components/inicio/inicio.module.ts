import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

//importamos librerias (modulos)
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio.component';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
    ,SharedModule
  ]
})
export class InicioModule { }

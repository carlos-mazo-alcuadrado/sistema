import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

//importamos librerias (modulos)
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio.component';
import { PaginainicioComponent } from './paginainicio/paginainicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';


@NgModule({
  declarations: [
    InicioComponent,
    PaginainicioComponent,
    NavbarComponent,
    UsuariosComponent,
    ReportesComponent,
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
    ,SharedModule
  ]
})
export class InicioModule { }

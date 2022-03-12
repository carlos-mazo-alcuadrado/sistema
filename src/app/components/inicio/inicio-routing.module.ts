import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { PaginainicioComponent } from './paginainicio/paginainicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [

  {path:'', component: InicioComponent, children:[
    {path: '', component: PaginainicioComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'reportes', component: ReportesComponent}
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }

import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  listUsuarios: Usuario[] = [
    {usuario: 'hola', nombre: 'como', apellido:'estas' , sexo:'Masculino'},
    {usuario: 'tu', nombre: 'me', apellido:'amas' , sexo:'Femenino'},
    {usuario: 'hola', nombre: 'como', apellido:'estas' , sexo:'Masculino'},
    {usuario: 'ayer', nombre: 'fue', apellido:'hermoso' , sexo:'Femenino'},
    {usuario: 'hoy', nombre: 'te vi', apellido:'hermosa' , sexo:'Femenino'},
    {usuario: 'ayer', nombre: 'fue', apellido:'hermoso' , sexo:'Femenino'},
    
  ];
  
  constructor() { }

getUsuario(){
  return this.listUsuarios.slice();
}


elminarUsuario(index:number){
  this.listUsuarios.splice(index,1);

}


agregarusuario(usuario:Usuario ){
  this.listUsuarios.unshift(usuario);
}

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// angular material
import { MatSliderModule } from '@angular/material/slider';
//libreria para los formularios
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
//botones
import {MatButtonModule} from '@angular/material/button';
//notificaciones
import {MatSnackBarModule} from '@angular/material/snack-bar';
//barra de progresiva
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
    ,MatSliderModule
    ,MatFormFieldModule
    ,MatInputModule
    ,MatButtonModule
    ,ReactiveFormsModule
    ,MatSnackBarModule
    ,MatProgressSpinnerModule
  ],
exports:[
  MatSliderModule
  ,MatFormFieldModule
  ,MatInputModule
  ,MatButtonModule
  ,ReactiveFormsModule
  ,MatSnackBarModule
  ,MatProgressSpinnerModule
 

]

})
export class SharedModule { }

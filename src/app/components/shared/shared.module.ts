import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

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

//toolbar
import {MatToolbarModule} from '@angular/material/toolbar';


//iconos
import {MatIconModule} from '@angular/material/icon';



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
    ,MatToolbarModule
    ,MatIconModule
    ,HttpClientModule
  ],
exports:[
  MatSliderModule
  ,MatFormFieldModule
  ,MatInputModule
  ,MatButtonModule
  ,ReactiveFormsModule
  ,MatSnackBarModule
  ,MatProgressSpinnerModule
  ,MatToolbarModule
  ,MatIconModule
  ,HttpClientModule

]

})
export class SharedModule { }

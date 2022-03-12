import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //variables
  form:FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router ) {
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }


  entrar(){
    console.log(this.form);
    const usuario=this.form.value.usuario;
    const password=this.form.value.password;
    // console.log (usuario);
    // console.log (password);
          if(usuario=='admin' && password == '123')
        {

          //entra

          this.fakeLoading();

          }  else{

            //no entra
            this.error();
            this.form.reset();
            }

  }
  

  error(): void{
           this._snackBar.open('usuario o contraseña no corresponden,validar', ''
                                ,{duration: 1000,
                                  horizontalPosition:'center',
                                  verticalPosition:'bottom'        
                                }
                              )
         }


        fakeLoading(){
                        this.loading = true;
                        setTimeout(() => {

                          //this.loading=false;

                          // envio a pagina de inicio
                            this.router.navigate(['inicio']) ; 
                        }, 1500);
                      }

}

      

  


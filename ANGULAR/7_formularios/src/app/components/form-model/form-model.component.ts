import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  imports: [ReactiveFormsModule],   //<------ Libreria
  templateUrl: './form-model.component.html',
  styleUrl: './form-model.component.css'
})
export class FormModelComponent {

  //Alta de la variable y funcion del formulario
  userForm: FormGroup;

//Documento de la libreria sugiere inicializar en el constructor
  constructor(){                        
    this.userForm = new FormGroup({
                           //("Datos iniciales",[Validadores])
      nombre: new FormControl("",[
        Validators.required,       //<---- VALIDADORES ANGULAR: https://angular.dev/api/forms/Validators
        Validators.minLength(3)
      ]),
      email: new FormControl("",[
        Validators.required,
        // Validators.email   --> email validator un poco corto, con que pongas @ lo acepta
        Validators.pattern(/\S+\@\S+\.\S+/)  //--> expresiones regulares
      ]),
      edad: new FormControl("",[
        Validators.max(65),
        Validators.min(18)
      ]),
      dni: new FormControl("",[
        //Obliga a recibir un parametro
        this.dniValidator
      ]),
      password: new FormControl("",[
        Validators.minLength(8),
        Validators.maxLength(16)
      ]),
      repitepassword: new FormControl("",[])

    },[this.compruebaRepitePassword]);//<-- Argumentos {Validadorescampo}, [ValidadoresFormulario], el tercero para asyncronos...
  }                                   //SOLO SE EJECUTA CUANDO LE DAMOS AL SUBMIT DEL FORM


  //Funcion del formulario
  getDataForm(){
    console.log(this.userForm.value)
  }

  //FUNCION TS EVITAR CHORIDO EN @IF !!!!!

                                                                  //Puede devolver undefined
  checkControl(controlName:string, errorName:string) : boolean  | undefined {
    return this.userForm.get(controlName)?.hasError(errorName) 
            && this.userForm.get(controlName)?.touched
  }


  //VALIDADOR COSTUMOZADO ... MUY USADO EN VALIDACIONES COMPLEJAS
                          //Input siempre tipo AbstractControl
  dniValidator(controlName:AbstractControl) : any{  //>-- tipo any para objeto ejemplo pero conviene crear Interface Error
    const letras: string[] = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let dni : string = controlName.value
    if(dni){
      dni=dni.toUpperCase()
    }
    
    const exp = /^\d{8}[A-Z]/
    if(exp.test(dni)){                      //.at -> posicion
      const letra : string | undefined = dni.at(-1)
      const numero : number = Number(dni.substring(0,dni.length-1)) //<--Convertir a number
      const posicion = numero % 23

      return (letras[posicion] !== letra) ? {'dniValidator' : 'DNI no válido'} : null

    }else{
    return {'dniValidator' : 'DNI mal formado'}
  }
}


//Funcion de repite password

compruebaRepitePassword(formValue:AbstractControl):any{
  const password = formValue.get('password');  //<--- Es  un validador de FORM, hay que especificar el campo
  const rep = formValue.get('repitepassword');//          AbstractControl tiene el método get('name')

  if(password!==rep){
    return {'compruebaRepitePassword' : true}
  }
  // Las funciones con return no son necesarios a veces los else
  // Cuando el validador es correcto no devuelve nada
  return   null;

}


}





/*
ESTADOS DEL FORMULARIO

valid-invalid
pristine-dirty
untouched-touched

*/
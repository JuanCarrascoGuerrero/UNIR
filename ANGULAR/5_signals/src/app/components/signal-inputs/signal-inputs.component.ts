import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-signal-inputs',
  imports: [],
  templateUrl: './signal-inputs.component.html',
  styleUrl: './signal-inputs.component.css'
})                                                //TRAEMOS INPUTS DESDE APP
export class SignalInputsComponent {       //Input FUNCTION para elementos no modificables
  miNombre = input<string>()          //input() signal, solo de lectura (no update o set)    SON FUNCIONES

  miArray = input<String[]>()   //<-- tambien para otros tipos y objectos


          //.required -> obligatorio, optativo
  miEdad = model.required<number>();  //lectura y escritura

ngOnInit(){
  //this.miNombre.set('Pepe')   <-- Comprobado, input() signal son solo lectura
  setTimeout(()=>{
    this.miEdad.update(value=>value+10)   //<--  ?¿?
  }, 3000)
}


}

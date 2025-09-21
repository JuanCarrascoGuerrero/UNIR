import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-computed',
  imports: [],
  templateUrl: './computed.component.html',
  styleUrl: './computed.component.css'
})
export class ComputedComponent {

  oculto:string = 'block'

  cont = signal(0)
  cantidad:number = 10

  //operacion con signal, interactividad consecuente
  dobleCont = computed(()=>{return this.cont()*2})


  //Recomendaciones... SIEMPRE EN EL CONSTRUSTOR
  //En el constructor añadimos funcion efect()
  //Effect permite añadir lógica asociada a los signals
  constructor(){
    effect(()=>{
      if(this.cont() % 2 === 0){
        this.oculto = 'none'
      }else{
        this.oculto = 'block'
      }
    })
  }

  increment(){
    this.cont.update(value=>value+1)
  }
}

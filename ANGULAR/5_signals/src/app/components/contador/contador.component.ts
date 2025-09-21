import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  //cambiando elementos que re renderizan la vista completa
  //contador:number = 0;

  //🧠por SIGNALS (funcion) Que no renderiza de nuevo toda la pantalla, SOLO EL VALOR
  contador = signal(0);

  sumar(){
    //cambiando elementos que re renderizan la vista completa
    //this.contador++

    //🧠por SIGNALS (funcion) Que no renderiza de nuevo toda la pantalla, SOLO EL VALOR
                  //EVENTO UPDATE
    this.contador.update(valor => valor++)
  }
  restar(){
    //cambiando elementos que re renderizan la vista completa
    //this.contador--

        //🧠por SIGNALS (funcion) Que no renderiza de nuevo toda la pantalla, SOLO EL VALOR
                  //EVENTO UPDATE
    this.contador.update(valor => valor--)
  }


  //🧠 OTRO EJEMPLO
  texto = signal("vacio");
  cambiarTexto(event:any){
    this.texto.update(valor => event.target.value);
  }

  reset(){
    this.texto.set('Juan')
  }
}

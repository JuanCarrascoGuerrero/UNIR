import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IAficion } from '../../interfaces/iaficion.interface';

@Component({
  selector: 'app-hobbies-list',
  imports: [FormsModule],
  templateUrl: './hobbies-list.component.html',
  styleUrl: './hobbies-list.component.css'
})
export class HobbiesListComponent {
  //TWO WAY DATA BINDING
  //Comunicación bidireccional entre          HTML <=> TS    Rectividad

  //Librería: FormsModule, añadida en imports del @Component

  arrayAficiones: IAficion[] = [];

  aficion: IAficion = {nombre: '',hobbie: ''}

  cargarDatos(): void{
    this.arrayAficiones.push(this.aficion)
    this.aficion = {nombre: '',hobbie: ''} //Recargamos REFERENCIA el objeto, sino siempre graba el ultimo
    console.log(this.arrayAficiones);     

    //OTRA ALTERNATIVA
    //                          push de objetos nuevos con propiedades
    // this.arrayAficiones.push(name: this.aficion.name, hobbie: this.aficion.hobbie)
  }


  //PRACTICA PRE  @FOR y SANITIZE.... En realidad ¡¡¡¡¡¡¡¡ NO DEBEMOS USAR innerHTML !!!!!!!
  pintarDatos(): string{
    let html = '';
    this.arrayAficiones.forEach(aficion =>{
      html += `<li class='rojo'>${aficion.nombre} - ${aficion.hobbie}`
    })          //ATENTO a este class='rojo' No se carga el del CSS del componente por TIEMPOS DE CARGA
                //                           Añadimos en css general o usamos tecnica @FOR
    return html;
  }
}

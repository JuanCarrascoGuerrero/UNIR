import { Component, Input } from '@angular/core';
import { ITask } from '../../interfaces/itask.interface';

@Component({
  selector: 'app-total',
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {

  horas:number = 0;
  @Input() tareas: ITask[] = [];


    //Funciones de ciclo de vida -->>  
  //        cosntructor(cuando se instancia la clase, solo afecta a la clase) 
   //               (Solo se ejecuta 1 vez, cuando se carga la clase)
  //        ngOnInt(cuando se carga todo el componente TS, HTML, CSS y >>>selector<<<)
  //               (Solo se ejecuta 1 vez, cuando se carga el componente)

  //Nuestro @Input esta enganchado en el >>>selector<<<  
  //  en app.html lo comprobamos:   <app-task-list [tareas]="arrayTask"></app-task-list>

  //So AQUI MANIPULAMOS input.....          ngOnInit()

  //Problema: Solo se ejecuta 1 vez! 
  //          Hay que buscar otra opcion que refresque los datos
  ngOnInit(){
    this.horas = this.tareas.reduce((acc,task)=>{
      return acc + task.tiempo;
    } , 0);
  }

}

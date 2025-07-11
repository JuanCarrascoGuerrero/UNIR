import { Component, Input } from '@angular/core';
import { ITask } from '../../interfaces/itask.interface';
import { TaskCardComponent } from "../task-card/task-card.component";

@Component({
  selector: 'app-task-list',
  imports: [TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input()tareas: ITask[] = [];

  //Funciones de ciclo de vida -->>  
  //        cosntructor(cuando se instancia la clase, solo afecta a la clase) 
   //               (Solo se ejecuta 1 vez, cuando se carga la clase)
  //        ngOnInt(cuando se carga todo el componente TS, HTML, CSS y >>>selector<<<)
  //               (Solo se ejecuta 1 vez, cuando se carga el componente)

  //Nuestro @Input esta enganchado en el >>>selector<<<  
  //  en app.html lo comprobamos:   <app-task-list [tareas]="arrayTask"></app-task-list>

  //So siquisieramos manipular input.....          ngOnInit()

  ngOnInit(){}
}

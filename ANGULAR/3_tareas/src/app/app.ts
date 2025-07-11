import { Component } from '@angular/core';
import { FormComponent } from "./components/form/form.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TotalComponent } from "./components/total/total.component";
import { ITask } from './interfaces/itask.interface';

@Component({
  selector: 'app-root',
  imports: [FormComponent, TaskListComponent, TotalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '3_tareas';

  //Almacen de tareas
  arrayTask: ITask[] = [
    {titulo:'Salir a correr', prioridad: 'diaria', tiempo:1},
    {titulo:'Hacer fotos', prioridad: 'mensual', tiempo:0.30}
  ];


          //Aquí está nuestro evento tipo ITask recibido
  saveTask(event: ITask){
    //console.log(event)       //--> Ya lo tiene Papá! (Mirar el public/img/img1.png)
    
    
    //¿control duplicidades?      //.findIndex() Si existe devuelve posicion, sino -1
    const posicion = this.arrayTask.findIndex(task=>task.titulo===event.titulo);
    if(posicion===-1){
      this.arrayTask.push(event); 
    }else{
      alert("Tarea duplicada!")
    }
  }
}

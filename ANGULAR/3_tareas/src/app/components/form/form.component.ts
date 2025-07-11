import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask } from '../../interfaces/itask.interface';

@Component({
  selector: 'app-form',
  imports: [FormsModule],  //FormsModule -> Necesario para TWO WAY DATA BINDING de formularios
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newTask: ITask = {titulo:"",prioridad:"",tiempo:0}

  //Funcion decoradora @Output la categoriza como output
                      //EventEmitter -> Lanza objeto
  @Output() taskEmit: EventEmitter<ITask> = new EventEmitter();

  guardarTarea(){
    if(this.newTask.titulo!==""&&this.newTask.prioridad!==""&&this.newTask.tiempo!=0){
      // La nueva Tarea la mandamos @Output al padre que es quien la almacena
      this.taskEmit.emit(this.newTask);
      this.newTask = {titulo:"",prioridad:"",tiempo:0};  //Vaciamos! Hay que romper la referencia 
    }else{                                               //          o cada sobrescribe las ya almacenadas
      alert("Todos los campos son obligatorios")
    }
    
  }
}

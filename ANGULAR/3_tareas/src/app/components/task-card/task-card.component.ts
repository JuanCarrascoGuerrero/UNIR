import { Component, Input } from '@angular/core';
import { ITask } from '../../interfaces/itask.interface';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  @Input() miTarea: ITask = { titulo: '', prioridad: '', tiempo: 0 };

  //   miTarea   no esta disponible hasta que se haya cargado el >>>selector<<<
  ngOnInit() {}
}

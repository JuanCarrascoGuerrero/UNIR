import { Component, inject } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { IStudent } from '../../interfaces/istudent';
import { StudentcardComponent } from '../studentcard/studentcard.component';
import { FormsModule } from '@angular/forms';
import { StudentfiltrosComponent } from "../studentfiltros/studentfiltros.component";

//LO TENGO QUE COPIAR AQUI Y EN EL HIJO, no es un interface
//Tipo raido --> creamos objeto adhoc rápido para ahorrarnos crear un interface
type EdadTipo = {
  "agemin" : number,
  "agemax" :number
}


@Component({
  selector: 'app-student-list',
  imports: [StudentcardComponent, FormsModule, StudentfiltrosComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  //Pedir informacion alumnos via servicio

  //Opcion 1 moderna, la mejor --> inject(Service)
  studentService = inject(StudentsService)

  alumnos:IStudent[] = [];

  //Cuando este cargado el componente se lo pedimos al servicio
  ngOnInit(){
    this.alumnos = this.studentService.getAll();
  }


  //Opcion 2 antigua
  //constructor(private alumnosServices: StudentsService){}


  filtraPorEdad(event:EdadTipo){
    this.alumnos = this.studentService.getByAge(event)
  }



}

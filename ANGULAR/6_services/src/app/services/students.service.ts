import { Injectable } from '@angular/core';
import { IStudent } from '../interfaces/istudent';
import { ALUMNOS } from '../bbdd/students.db';


//LO TENGO QUE COPIAR AQUI Y EN EL HIJO Y EN EL SERVICE!!, no es un interface
//Tipo raido --> creamos objeto adhoc rápido para ahorrarnos crear un interface
type EdadTipo = {
  "agemin" : number,
  "agemax" :number
}


@Injectable({
  providedIn: 'root' //a toda la aplciacion
})
export class StudentsService {

  //VIP para proteger los datos y volver los métodos del servisio GETTERS y SETTERS
  private arrayAlumnos: IStudent[] = ALUMNOS


  //El servicio decide que puedo hacer con los datos (create, deelte, update, get ...)


  //private origen datos... GETTERS
  getAll() : IStudent[] {
    return this.arrayAlumnos
  }

                        //Aqui tiene sentido doble tipado, puede devolver VOID
  getById(id:number) : IStudent | void{
    let alumno = this.arrayAlumnos.find(alumno => alumno.id === id)
    return alumno
  }

  getByAge(event:EdadTipo) : IStudent[] {

    return this.arrayAlumnos.filter(estudiante=>estudiante.edad >= event.agemin
                                              &&estudiante.edad <= event.agemax
    )
  }

}

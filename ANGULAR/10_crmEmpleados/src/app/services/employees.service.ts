import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IEmployee, IError } from '../interfaces/iemployee.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  private endPoint: string = "https://crm-empleados.onrender.com/api/empleados"
  private httpClient = inject(HttpClient)

  /**
   * getAll() Retrieves a list of all employees from the API.
   *
   * @returns Promise<IEmployee[]> A promise that resolves to an array of `IEmployee` objects.
   */
  getAll(): Promise<IEmployee[]> {
    //mi peticion necesita ser validada para ello necesito el token authorization, cada peticion tiene un segundo paramtro que puede recibir un funcion, funcion interceptora donde enviamos los datos de autorizacion.
    return lastValueFrom(this.httpClient.get<IEmployee[]>(this.endPoint, this.getAuthorization()))
  }

  getById(idEmployee: string): Promise<IEmployee> {
    return lastValueFrom(this.httpClient.get<IEmployee>(`${this.endPoint}/${idEmployee}`))
  }

  //registrar un nuevo empleado post me devuelve toda la informacion que yo le haya dado mas el _id
  insert(employee: IEmployee): Promise<IEmployee> {
    return lastValueFrom(this.httpClient.post<IEmployee>(this.endPoint, employee))
  }

  //registrar un nuevo empleado post me devuelve toda la informacion que yo le haya dado mas el _id
  update(employee: IEmployee): Promise<IEmployee> {
    let {_id, ...resto} = employee;                    //¡¡¡ DESTRUCTURING !!!
    return lastValueFrom(this.httpClient.put<IEmployee>(`${this.endPoint}/${_id}`, resto))
  }

  // metodo para borrar un empleado
  remove(idEmployee: string): Promise<IEmployee | IError> {
    return lastValueFrom(this.httpClient.delete<IEmployee | any>(`${this.endPoint}/${idEmployee}`))
  }


  //opcion 1: funcion interceptora
  private getAuthorization() {
    return {
      headers: new HttpHeaders({
        "Content-type": "application/json",
        "Authorization": localStorage.getItem('token') || ""
      })
    }
  } 
}



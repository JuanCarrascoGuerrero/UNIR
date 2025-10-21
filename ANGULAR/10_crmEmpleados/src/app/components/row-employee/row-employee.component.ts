import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IEmployee, IError } from '../../interfaces/iemployee.interface';
import { RouterLink } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';


@Component({
  selector: '[app-row-employee]',
  imports: [RouterLink],
  templateUrl: './row-employee.component.html',
  styleUrl: './row-employee.component.css'
})
export class RowEmployeeComponent {
  @Input() myEmployee!: IEmployee
  @Output() deleteEmployeeEmit : EventEmitter<string> = new EventEmitter()
  employeesService = inject(EmployeesService)

  async deleteEmployee(idEmployee: string) {
    //llamar al servicio y pedirte que borre el empleado por id
    const response : any /*IEmployee|IError*/ = await this.employeesService.remove(idEmployee)
                        //no funciona porque el modo stricto de typescript... error no esta en ambas
    if(!response.error){
      //No hay error, eliminación correcta
      window.location.href = "/dashboard/empleados"                 //opcion recargar pagina para ver el resultado 
                                                                    //mas propio de JAVA o PHP (server side)
      this.deleteEmployeeEmit.emit('Empleado borrado correctamente')   //En ANGULAR -> Output avisar al padre (donde esta el @for) del borrado
    }else{
        alert(response.error)
    }
  }
}

import { Component, inject, Input } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { IEmployee } from '../../interfaces/iemployee.interface';

@Component({
  selector: 'app-employees-view',
  imports: [],
  templateUrl: './employees-view.component.html',
  styleUrl: './employees-view.component.css'
})
export class EmployeesViewComponent {
  //captura el id de la ruta para hacer un peticion al servicio del empleado por id => getById
  @Input() idEmployee: string = ""
  employeesService = inject(EmployeesService)
  employee!: IEmployee

  async ngOnInit() {
    //con el id de empleado llamamos al servicio a la function getById
    try {
      this.employee = await this.employeesService.getById(this.idEmployee)
    } catch (msg: any) {
      console.log(msg.error)
    }

  }

}

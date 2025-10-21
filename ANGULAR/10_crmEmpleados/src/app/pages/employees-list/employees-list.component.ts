import { Component, inject } from '@angular/core';
import { IEmployee } from '../../interfaces/iemployee.interface';
import { EmployeesService } from '../../services/employees.service';
import { RowEmployeeComponent } from "../../components/row-employee/row-employee.component";
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-employees-list',
  imports: [RowEmployeeComponent],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent {
  arrEmployees: IEmployee[] = []
  employeesServices = inject(EmployeesService)

  async ngOnInit() {
    //lleno el array de empleados llamando al servicio y pidiendo todos los empleados getAll.
    this.cargarComponente();
  }

  getAlertDelete(event:string){
    this.cargarComponente();
    alert(event);
  }

  async cargarComponente(){
    try {
      const response = await this.employeesServices.getAll()
      console.log(response)
      this.arrEmployees = response
    }
    catch (msg: any) {
      toast.error(msg) //Implementacion del toast de ngx-sonnar
    }
  }

}

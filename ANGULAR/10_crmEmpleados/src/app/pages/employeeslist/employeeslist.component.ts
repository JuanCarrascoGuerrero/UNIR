import { Component, inject } from '@angular/core';
import { IEmployee } from '../../interfaces/iemployee.interface';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employeeslist',
  imports: [],
  templateUrl: './employeeslist.component.html',
  styleUrl: './employeeslist.component.css'
})
export class EmployeeslistComponent {

  arrEmployees! : IEmployee[];
  service = inject(EmployeesService);

  async ngOnInit(){
    try{
        const response = await this.service.getAll();
        this.arrEmployees = response;
    }catch(msg:any){
        alert(msg.error.error)
    }
    

  }
}

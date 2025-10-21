import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { EmployeesService } from '../../services/employees.service';
import { IEmployee, IError } from '../../interfaces/iemployee.interface';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
    employeeForm : FormGroup = new FormGroup([]);  //para evitar inicializarlo en constructor
    employeService = inject(EmployeesService);
    router = inject(Router);
    @Input() idEmployee! : string;
    employee : IEmployee | any;
    title: string = 'Registrar'


    constructor(){
        this.employeeForm = new FormGroup({
        _id : new FormControl(this.employee._id),   /////<--- DIFERENCIA ACTUALIZAR respecto a nuevo
        nombre: new FormControl("", Validators.required),
        apellidos: new FormControl("", Validators.required),
        telefono: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
        email: new FormControl("", [Validators.required, Validators.email]),
        departamento: new FormControl("", Validators.required),
        salario: new FormControl("", [Validators.required, Validators.min(0)])
      },[])
    }

    //aqui tengo disponible la ruta y el idEmployee de ruta, en el constructor no ?averigua porque?
    async ngOnInit(){
      
      if(this.idEmployee){
        //Actualizando, recupero el empleado para rellenar el form
        this.employee = await this.employeService.getById(this.idEmployee)
        //Si no hay id objeto vacío, formulario vacío
        this.employeeForm = new FormGroup({
        nombre: new FormControl(this.employee.nombre, Validators.required),
        apellidos: new FormControl(this.employee.apellidos, Validators.required),
        telefono: new FormControl(this.employee.telefono, [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
        email: new FormControl(this.employee.email, [Validators.required, Validators.email]),
        departamento: new FormControl(this.employee.departamento, Validators.required),
        salario: new FormControl(this.employee.salario, [Validators.required, Validators.min(0)])
      },[])
      this.title='Actualizar';
    }
  }

    async getDataForm() {
    if (this.employeeForm.valid) {
      try{
        if(this.employeeForm.value._id){
          //ACTUALIZAR
          const response = await this.employeService.update(this.employeeForm.value);
          if(response){
            this.router.navigate(['dashboard']);
            toast.warning('Usuario actualizado correctamente')
          }
        }else{
          //INSERTANDO
          const response = await this.employeService.insert(this.employeeForm.value);
          if(response){
            this.router.navigate(['dashboard']);
            toast.success('Usuario creado  correctamente')
          }
        }
      }catch(msg){
        alert(msg);
      }
      
      // Aquí puedes enviar los datos al backend o hacer lo que necesites
    }
  }
}

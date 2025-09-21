import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUsers } from '../../interfaces/iusers.interface';

@Component({
  selector: 'app-form-template',
  imports: [FormsModule],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css'
})
export class FormTemplateComponent {


getDataForm(userForm:any){
  let user: IUsers = userForm.value;
  console.log(user)

  //Reseteo de form incluido en la receta, refresca referencia
  userForm.reset()
}


}

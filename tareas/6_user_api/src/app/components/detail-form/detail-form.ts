import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersserviceService } from '../../services/usersservice.service';
import { IUser } from '../../interfaces/iuser.interface';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-form',
  imports: [ReactiveFormsModule],
  templateUrl: './detail-form.html',
  styleUrl: './detail-form.css',
})
export class DetailForm {
  userForm!: FormGroup; //operador de aserción ! para evitar strictPropertyInitialization del formulario en constructor()
  service = inject(UsersserviceService);
  newUser!: IUser;
  user!: IUser;
  //Capturador de parámetros de la ruta
  activatedRoute = inject(ActivatedRoute);
  id!: string;
  isLoading: boolean = true;        //Añadimos variable para renderizado, permite controlar tiempos del await
  botontext : string = "Guardar"    //de manera contraria hay un lag de segundos con el titulo anterior
  constructor() {}

  async ngOnInit(): Promise<void> {
    const params = await firstValueFrom(this.activatedRoute.params);
    console.log(params);
    this.id = params['_id'];

    if (this.id) {
      this.user = await this.service.geUserBy_id(this.id);
      this.botontext = "Actualizar"
    }
    this.userForm = this.buildForm();
    this.isLoading = false;
  }

  checkControl(control: string, error: string): boolean | undefined {
    return (
      this.userForm.get(control)?.hasError(error) &&
      this.userForm.get(control)?.touched
    );
  }

  async getDataForm() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched(); // Esto fuerza que todos los campos muestren sus errores
      return; // No continúa si el formulario es inválido
    }
    const formData = this.userForm.value;
    //Si hay user es una actualización
    if (this.user) {
      const previousUserSave = { ...this.user };
      this.user = {
        first_name: formData.name,
        last_name: formData.surname,
        email: formData.email,
        image: formData.url,
        username: `${formData.name.toLowerCase()}.${formData.surname.toLowerCase()}`,
      };
      if(this.userForm.dirty){
        const response = await this.service.updateUserById(this.user);
        if (response === 'OK') {
          return Swal.fire('OK!', 'El registro ha sido actualizado', 'success');
        } else {
          this.user = previousUserSave;
          return Swal.fire('Error!', 'No se ha podido actualizar el registro', 'error');
        }
      }else{
        return Swal.fire('...?', 'No has añadido cambios', 'warning');
      }

      //En caso contrario es un nuevo user
    } else {
      this.newUser = {
        //Supongamos que id se genera automáticamente en la BBDD...
        first_name: formData.name,
        last_name: formData.surname,
        email: formData.email,
        image: formData.url,
        username: `${formData.name.toLowerCase()}.${formData.surname.toLowerCase()}`,
      };

      const response = await this.service.postNewUser(this.newUser);
      if (response === 'OK') {
        this.userForm = this.buildForm();
        return Swal.fire('OK!', `¡Bienvenid@ng serve ${this.newUser.first_name}!`, 'success');
      }
      return Swal.fire('Error!', `No hemos podido dar de alta a ${this.newUser.first_name}`, 'error');
    }
  }

  buildForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(this.user ? this.user.first_name : '', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d10-9\s]+$/)
      ]),
      surname: new FormControl(this.user ? this.user.last_name : '', [
        Validators.required,
        Validators.maxLength(40),
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d10-9\s]+$/)
      ]),
      email: new FormControl(this.user ? this.user.email : '', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(8),
        Validators.pattern(/\S+\@\S+\.\S+/),
      ]),
      url: new FormControl(this.user ? this.user.image : '', [
        Validators.required,
        Validators.pattern(/^(https?:\/\/|file:\/\/\/)[^\s]+$/),
      ]),
    });
  }
}

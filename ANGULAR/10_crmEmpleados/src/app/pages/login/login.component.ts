import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { IResponse, IUser } from '../../interfaces/iuser.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usersService = inject(UsersService)
  router = inject(Router)

  async getLogin(loginForm: any) {
    const user: IUser = loginForm.value
    //llamo al servicio y le paso el usuario, este me deberá responder con algun tipo de mensaje.
    try {
      const response: any = await this.usersService.login(user)
      //aqui me logado correctamente redirijo dashboard
      if (response) {
        //almacenar ese token en el localstorage para poder guardar el estado de logado en la aplicacion.
        // localstorage.getItem(var) leer,
        // localstorage.setItem(var, value) crearla,
        // localstorage.removeItem(var) borrar ese var
        // localstorage.clear() vaciar todo el localstorage.
        localStorage.setItem('token', response.token)
        this.router.navigate(["/dashboard"])
      }

    } catch (msg: any) {
      alert(msg.error.error)
    }
  }
}

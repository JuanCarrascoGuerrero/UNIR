import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { IUser } from './interfaces/iuser.interface';
//import { USERS } from './bbdd/local.db';    //<-- Base de datos local
import { IResponse } from './interfaces/ipaginated.interface';
import { UsersserviceService } from './services/usersservice.service';

@Component({
  selector: 'app-root',
  imports: [NavBar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  protected title = '6_user_api';
  usersService = inject(UsersserviceService);

  //Objetos de datos recuperados de la API
  usuarios!: IResponse[];
  objetoResponse!: IResponse[];
  users!: IUser[];

  usersPerPage: number = 6;
  init: number = 0;
  usersPag!: IUser[];

  ngOnInit() {
    this.usersService
      .getAll()
      .then((response) => {
        this.objetoResponse = [response];
        this.users = response.results;
        this.usersPag = this.paginate(1);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
      });
    
  }

  paginate(page: number): IUser[] {
    const startIndex = (page - 1) * this.usersPerPage;
    const endIndex = startIndex + this.usersPerPage;
    return this.users.slice(startIndex, endIndex);
  }
}

import { Component, inject } from '@angular/core';
import { IResponse } from '../../interfaces/ipaginated.interface';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersserviceService } from '../../services/usersservice.service';
import { UserCard } from '../user-card/user-card';

@Component({
  selector: 'app-user-grid',
  imports: [UserCard],
  templateUrl: './user-grid.html',
  styleUrl: './user-grid.css'
})
export class UserGrid {
  usersService = inject(UsersserviceService);

  //Objetos de datos recuperados de la API
  usuarios!: IResponse[];
  objetoResponse!: IResponse[];
  users!: IUser[];

  usersPerPage: number = 6;
  init: number = 1;
  max: number = 0;
  arrayLength!: number;
  usersPag!: IUser[];

  ngOnInit() {
    this.usersService
      .getAll()
      .then((response) => {
        this.objetoResponse = [response];
        this.users = response.results;
        this.arrayLength = this.users.length;
        this.paginate(1);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
      });
    
  }

  paginate(page: number): void {
    this.init = page;
    const startIndex = (page - 1) * this.usersPerPage;
    const endIndex = startIndex + this.usersPerPage;
    this.max = endIndex;
    this.usersPag = this.users.slice(startIndex, endIndex);
  }
}

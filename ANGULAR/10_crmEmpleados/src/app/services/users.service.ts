import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponse, IUser } from '../interfaces/iuser.interface';
import { lastValueFrom } from 'rxjs';

type IError = {
  error: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpClient = inject(HttpClient)
  private baseUrl: string = 'https://crm-empleados.onrender.com/api/usuarios'

  login(user: IUser): Promise<IResponse | IError> {
    return lastValueFrom(this.httpClient.post<any>(`${this.baseUrl}/login`, user))
  }



}

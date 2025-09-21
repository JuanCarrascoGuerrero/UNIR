import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponse } from '../interfaces/ipaginated.interface';
import { lastValueFrom } from 'rxjs';
import { IUser } from '../interfaces/iuser.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersserviceService {
  private httpClient = inject(HttpClient);

  private baseUrl: string = 'https://peticiones.online/api/users';

  getAll(): Promise<any> {
    return lastValueFrom(this.httpClient.get<IResponse>(this.baseUrl));
  }

  geUserBy_id(_id: string): Promise<IUser> {
    return lastValueFrom(this.httpClient.get<IUser>(`${this.baseUrl}/${_id}`));
  }

  async postNewUser(newUser: IUser): Promise<string> {
    try {
      const response = await lastValueFrom(
        this.httpClient.post<IUser>(this.baseUrl, newUser)
      );
      return response ? 'OK' : 'ERROR';
    } catch (error) {
      console.error('Connection error:', error);
      return 'ERROR';
    }
  }

  async updateUserById(user: IUser): Promise<string> {
    try {
      const response = await lastValueFrom(
        this.httpClient.put<IUser>(`${this.baseUrl}/${user._id!}`, user)
      );
      return response ? 'OK' : 'ERROR';
    } catch (error) {
      console.error('Connection error:', error);
      return 'ERROR';
    }
  }

  async deleteUserById(user: IUser): Promise<IUser> {
    return await lastValueFrom(
      this.httpClient.delete<IUser>(`${this.baseUrl}/${user._id!}`)
    );
  }
}

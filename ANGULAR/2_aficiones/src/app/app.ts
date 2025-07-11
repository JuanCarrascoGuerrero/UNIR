import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HobbiesListComponent } from './components/hobbies-list/hobbies-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { IUser } from './interfaces/iuser.interface';

@Component({
  selector: 'app-root',
  imports: [HobbiesListComponent, UserCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '2_aficiones';

  arrayUsuarios : IUser[] = [
    {nombre:'Mario', email:"m@mail.com", foto:"https://randomuser.me/api/portraits/men/21.jpg"},
    {nombre:'Felix', email:"F@mail.com", foto:"https://randomuser.me/api/portraits/men/20.jpg"},
    {nombre:'Juan', email:"j@mail.com", foto:"https://randomuser.me/api/portraits/men/22.jpg"}
  ]
}

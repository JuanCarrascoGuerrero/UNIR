import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navdashboard',
  imports: [RouterLink],
  templateUrl: './navdashboard.component.html',
  styleUrl: './navdashboard.component.css'
})
export class NavdashboardComponent {
  router = inject(Router)
  logout() {
    //borrar el localstorage solo el token y redirecciono a login
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}

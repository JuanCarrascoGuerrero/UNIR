import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})



export class NavBar {

  router = inject(Router);
    
  //Lo pasamos a funcion con promise + reload para regargar formulario
  reloadNewUser(){
    this.router.navigate(['/newuser']).then(() => {
    location.reload();
  });

  }
}

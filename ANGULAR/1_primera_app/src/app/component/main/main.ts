import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  nombre: string = 'Juan';
  color: string = 'green';
  numero:number = 0;

  getNombre() :string{
    return 'Maria'
  }

  contador = signal<number>(2)

  //Funcion de carga del componente
  ngOnInit(){
    setInterval(()=> {
      this.numero = Math.ceil(Math.random()*100);
      this.contador.set(Math.ceil(Math.random()*100));
    },1000)
  }

}

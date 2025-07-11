import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  nombre: string = 'Juan';
  color: string = 'green';
  numero: number = 0;
  estiloCaja: any = ''; //realmente es un objeto, abria que hacer interface
  miClase: string = '';
  estado: boolean = false;
  ciudadSeleccionada: string = 'Ninguna';

  getNombre(): string {
    return 'Maria';
  }

  contador = signal<number>(2);

  //Funcion de carga del componente
  ngOnInit() {
    setInterval(() => {
      this.numero = Math.ceil(Math.random() * 100);
      this.contador.set(Math.ceil(Math.random() * 100));
    }, 1000);
  }

  cambiaColor(color: string): void {
    this.estiloCaja = {
      color: color,
      border: '10px solid red',
      'border-radius': '50%',
    };
    this.miClase = 'sombra';
    this.estado = true;
  }

  seleccionarCiudad(event: any){    //Recuerda, accedemos al value del elemento event via "target"
    this.ciudadSeleccionada = event.target.value===''?'Ninguna':event.target.value.toUpperCase();
  }
}

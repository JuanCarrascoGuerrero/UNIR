import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  //inicializamos input con el mismo nombre que le hemos puesto en la propiedad del padre: app.html
  // y DECORAMOS con variable tipo @Input
  @Input() nombre: string='';
  @Input() email: string='';
  @Input() foto: string='';


  //Funcion CICLO DE VIDA que ocurren SOLO UNA VEZ
  //constructor cuando se carga la clase
  constructor(){
    console.log(`Variable en constructor: ${this.foto}`)
  }
  // ngOnInit cuando se ha cargado todos los elementos de un componente (clase, html, css y selector)
  ngOnInit(){
    console.log(`Variable en ngOnInit: ${this.foto}`)
    if(this.foto===''){
      this.foto='https://randomuser.me/api/portraits/lego/2.jpg' //<-- default
    }
  }
}

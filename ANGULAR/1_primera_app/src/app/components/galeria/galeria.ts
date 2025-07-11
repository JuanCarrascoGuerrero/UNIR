import { Component } from '@angular/core';
import { IPhoto } from '../../interfaces/iphoto';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {
  imagenGal: number = 0;
  arrayImagenes: IPhoto[] = [
    {id:1, title:'demo1', url:'img/demo1.png'},
    {id:2, title:'demo2', url:'img/demo2.png'},
    {id:3, title:'demo3', url:'img/demo3.png'},
    
  ]

  cambiaImg(event: any): void{
    if(event.target.id === "prev"){
      this.imagenGal = this.imagenGal === 0? 0 : this.imagenGal-1;
    }else{
      this.imagenGal = this.imagenGal === 3? 3 : this.imagenGal+1;
    }
  }
}

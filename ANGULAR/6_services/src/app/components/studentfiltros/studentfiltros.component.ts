import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Tipo rapido --> creamos objeto adhoc rápido para ahorrarnos crear un interface
type EdadTipo = {
  "agemin" : number,
  "agemax" :number
}


@Component({
  selector: 'app-studentfiltros',
  imports: [FormsModule],
  templateUrl: './studentfiltros.component.html',
  styleUrl: './studentfiltros.component.css'
})
export class StudentfiltrosComponent {

    //Desarrollo del componente...
  agemin:number=0
  agemax:number=0

  @Output() edadFiltro : EventEmitter<EdadTipo> = new EventEmitter();

  recogerEdades():boolean{
    //comprueba edad minima y max coherentes
    if(this.agemax<this.agemin){
      alert('Edad minima tiene que ser mayor que la máxima')
      return false
    }
    //emito al padre
    const edades: EdadTipo = {
      "agemin" : this.agemin,
      "agemax" : this.agemax
    }
    this.edadFiltro.emit(edades)
    return true;
  }

  reseteaEdades(){

    //emito al padre
    const edades: EdadTipo = {
      "agemin" : -1,
      "agemax" : 1000
    }
    this.edadFiltro.emit(edades)

    this.agemin=0
    this.agemax=0

  }


}

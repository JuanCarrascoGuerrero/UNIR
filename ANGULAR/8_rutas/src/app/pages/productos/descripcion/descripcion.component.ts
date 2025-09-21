import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../../services/service';
import { IDescription } from '../../../interfaces/iprodcomp.interface';

@Component({
  selector: 'app-descripcion',
  imports: [],
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css',
})
export class DescripcionComponent {
  //Debería saber que producto he cargado para obtener objeto.descripcion

  //Opcion b simple (recuerda para que esto funcione hay que añadir withComponentInputBinding en app.config.ts)
  //No funciona si el ':urlDinámica' (parte relativa) no esta en este path!!!!
  @Input() idProduct!: string;

  //Por eso existe la opcion a
  activateRoute = inject(ActivatedRoute);

  descripcion!: IDescription;
  service = inject(Service);

  ngOnInit() {
    console.log(this.idProduct); //<-- undefined

    //¡¡¡ Pero en el observable subscribe tampoco encuentra la parte relativa !!!
    this.activateRoute.params.subscribe((params: any) => console.log(params)); //<-- undefined

    //Hay que buscar en el padre
    this.activateRoute.parent?.params.subscribe((params: any) => {
      const id: string = params.id;
      const response = this.service.getProductDescripcionById(id);
      if (response) {
        this.descripcion = response;
      }
    });
  }
}

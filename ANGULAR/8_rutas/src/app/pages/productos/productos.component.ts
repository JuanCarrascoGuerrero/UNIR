import { Component, inject } from '@angular/core';
import { IProducto } from '../../interfaces/iproducto.interface';
import { Service } from '../../services/service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-productos',
  imports: [RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  service = inject(Service);
  arrayProductos : IProducto[] = [];


  ngOnInit(){
    this.arrayProductos = this.service.getAllProd();
  }


}

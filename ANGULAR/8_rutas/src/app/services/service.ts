import { Injectable } from '@angular/core';
import { IServicio } from '../interfaces/iservicio.interface';
import { SERVICIOS } from '../db/trabajos.db';
import { IProducto } from '../interfaces/iproducto.interface';
import { PRODUCTOS } from '../db/productos.db';
import { IDescription, IOrigen, IProdComp } from '../interfaces/iprodcomp.interface';
import { PRODCOMP } from '../db/prodcomp.db';

@Injectable({
  providedIn: 'root'
})
export class Service {
  
  private arrTrabajos : IServicio[] = SERVICIOS;

  private arrProductos : IProducto[] = PRODUCTOS;

  private arrProComp : IProdComp[] = PRODCOMP;


  //Listar todos los servicios
  getAll():IServicio[]{
    return this.arrTrabajos;    //Aqui va la llamada a la API
  }

  //Ver la informacion de 1 servicio. Recibe un dato que identifica el producto
  getByUrl(url:string):IServicio|undefined{
    return this.arrTrabajos.find( servicio => servicio.url === url);
  }


    //Listar todos los servicios
  getAllProd():IProducto[]{
    return this.arrProductos;    //Aqui va la llamada a la API
  }

  //Ver la informacion de 1 servicio. Recibe un dato que identifica el producto
  getProductById(id:string):IProducto|undefined{
    return this.arrProductos.find( producto => producto.id.toString() === id);
  }



  getProductDescripcionById(id:string):IDescription|undefined{
    const producto = this.arrProComp.find( producto => producto.id.toString() === id);
      return producto?.description;
  }

    getProductOrigenById(id:string):IOrigen|undefined{
    const producto = this.arrProComp.find( producto => producto.id.toString() === id);
      return producto?.origen;
  }

}

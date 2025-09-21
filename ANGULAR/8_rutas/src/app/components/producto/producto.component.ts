import { Component, inject, Input } from '@angular/core';
import { IProducto } from '../../interfaces/iproducto.interface';
import { Service } from '../../services/service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-producto',
  imports: [RouterLink, RouterOutlet, ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  @Input() id! : string;  //Todo parametro por ruta ES UN STRING

  service = inject(Service);
  router = inject(Router);

  producto! : IProducto;


  ngOnInit(){
    const response = this.service.getProductById(this.id);
    if(!response){
      this.router.navigate(['/error'])
    }

    this.producto = response!;
  }

}

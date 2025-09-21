import { Component, inject } from '@angular/core';
import { IOrigen } from '../../../interfaces/iprodcomp.interface';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../../services/service';

@Component({
  selector: 'app-origen',
  imports: [],
  templateUrl: './origen.component.html',
  styleUrl: './origen.component.css'
})
export class OrigenComponent {

  //Por eso existe la opcion a
  activateRoute = inject(ActivatedRoute);

  origen! : IOrigen;
  service = inject(Service);

  ngOnInit(){

    this.activateRoute.parent?.params.subscribe((params:any)=>{
      const id : string = params.id;
      const response = this.service.getProductOrigenById(id);
      if(response){
        this.origen = response;
      }
    })
    
  }



}

import { Component, inject } from '@angular/core';
import { Service } from '../../services/service';
import { IServicio } from '../../interfaces/iservicio.interface';
import { WorkCardComponent } from "../../components/work-card/work-card.component";

@Component({
  selector: 'app-our-services',
  imports: [WorkCardComponent],
  templateUrl: './our-services.html',
  styleUrl: './our-services.css'
})
export class OurServices {

  /*Forma antigua
  constructor(private service:Service){}
  */


  //Vamos a usar el servicio   --> Forma moderna desde ANG16, como inyectable
  service = inject(Service)


  //llenamos array de datos en ngOnInit, cuando carge el componente
  arrayTrabajos: IServicio[] = [];
  ngOnInit(){
    this.arrayTrabajos = this.service.getAll();
  }

}

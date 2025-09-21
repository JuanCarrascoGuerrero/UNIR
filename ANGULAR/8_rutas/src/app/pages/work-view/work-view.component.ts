import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Service } from '../../services/service';
import { IServicio } from '../../interfaces/iservicio.interface';


@Component({
  selector: 'app-work-view',
  imports: [RouterLink],
  templateUrl: './work-view.component.html',
  styleUrl: './work-view.component.css'
})
export class WorkViewComponent {

  service = inject(Service);
  router = inject(Router);
  trabajo! : IServicio;


  //Necesito saber cual es el dato que debo cargar de mi servicio.
  //En este caso puedo extraer de la URL de mi navegador lo que quiero visualizar

  //OPCION 1 (la más utilizada, testada, potente pero MAS COMPLEJA)
  //             ActivatedRoute  => Inyectable de la librería de rutas

  activateRoute = inject(ActivatedRoute);


  //OPCION 2 -> Más SENCILLA @INPUT ID PARA RUTAS
  //  Hay que incluir en el app.config.ts el objeto --> provideRouter(routes,withComponentInputBinding()),
  @Input() url : string = ""; //<-- parte dinámica definida en app.routes.ts

  ngOnInit(){




    //opcion 1: Preguntamos al activatedroute cual es el parametro de ruta activo, variable
    this.activateRoute.params.subscribe((params:any) => {   //<--- subscribe un observable, elemento siempre observando que // haya cambios en la ruta variable
      console.log(params.url)          //<-- parte dinámica definida en app.routes.ts
      const url = params.url.toLowerCase();  //apunte antony controlar mayus minus
      // ...Mira tus parámetros y SUBSCRIBETE a cualquier cambio en parámetros de ruta

      //Con esta informacion consultamos al servicio el objeto es de esa url
      const response = this.service.getByUrl(url);
      if(response !== undefined){
        //OK
        this.trabajo = response;
      }else{
        // Redirijo a 404     //En este caso de ejemplo en realidad es ** pero para que no deje el /** probamos a poner /error
        this.router.navigate(['/error']); //tambien hay navigateByUrl para rutas externas... google, etc...
      }



      //opcion 2:
      console.log(this.url);
      //A partir de aqui continuamos con los procesos de la opcion 1. 
      //Logica con la url segun se requiera, en nuestro caso -> Service, elemento por url...etc





    })   
    
    
  }

}

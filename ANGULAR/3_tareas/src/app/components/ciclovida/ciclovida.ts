import { Component } from '@angular/core';

@Component({
  selector: 'app-ciclovida',
  imports: [],
  templateUrl: './ciclovida.html',
  styleUrl: './ciclovida.css'
})
export class Ciclovida {

    //        cosntructor(cuando se instancia la clase TS, solo afecta a la clase) 
   //               (Solo se ejecuta 1 vez, cuando se carga la clase)
  constructor(){
    console.log('constructor')
  }



    //        ngOnInt(cuando se carga todo el componente TS, HTML, CSS y >>>selector<<<)
  //               (Solo se ejecuta 1 vez, cuando se carga el componente)
  ngOnInit(){
    console.log('ngOnInit')
  }



      //        ngOnChange(siempre que modifiquemos los parámetros de entrada @input())
  //               (cada vez que modifiquemos @input())

  ngOnChanges(){                  //<--Simple changes, herramienta para ver anterior valor
    console.log('ngOnChanges')
  }


      //        ngDoCheck(siempre que el usuario interactúe con la pantalla)
  //               (se ejecuta, normalmente, muchas veces) ¡Atento a la saturación!
  ngDoCheck(){
    console.log('ngDoCheck')
  }


      //        ngAfterViewInit(cuando esta cargado el HTML. Renderizado inicial)
  //               (Solo se ejecuta 1 vez, primera vez que se carga el HTML)
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }


      //        ngAfterViewChecked(cada vez que se re-renderize HTML por un cambio en la maquetación)
  //               (cada vez que re-renderizamos)
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }


      //        ngOnDestroy(cuando retiramos todo el componente, ocurre sólo en cambio de rutas)
  //               (Solo se ejecuta 1 vez, cuando retiramos el componente)
  ngOnDestroy(){
    console.log('ngOnDestroy')
  }

}

import { Component, inject } from '@angular/core';
import { ICharacter } from '../../interfaces/icharacter.interface';
import { CharactersServiceService } from '../../services/characters.service.service';
import { IResponse } from '../../interfaces/iresponse.interface';
import { CharacterCardComponent } from "../../components/character-card/character-card.component";

@Component({
  selector: 'app-character-list',
  imports: [CharacterCardComponent],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterList {

  arrCharactersPromises!: ICharacter[];
  arrCharactersObservables!: ICharacter[];

  linkPrevious!: string;
  linkNext!: string;

  charService = inject(CharactersServiceService);


  ngOnInit(){
    //Opcion observable:  forma nativa ANGULAR peticiones http. 
    //                    Problema: Pesao siempre preguntando
    //                              se espera eliminar con signals

    /*this.charService.getAllObservables().subscribe({ //recibe Objeto con next y error
      next: (data : IResponse) =>{
        console.log(data)
        this.arrCharactersObservables = data.items; //items del IResponse
      },
      error: (error : any) =>{  //En ejecicio CRM empleados añadiremos mas chicha aquí, de momento any
        console.log(error)
      }              
    })*/

    //Opcion promise
    this.cargarPersonajes()

  }

  async cargarPersonajes(url? : string){
    /* Consumición de las promesas - generica de JS de hacer peticiones http*/
    //     const response : IResponse = await this.charService.getAllPromises();
    //     this.arrCharactersPromises = response.items;
    //Funciona y con menos código!... Ya pero no hay gestion de excepcion::::
    try{
      const response : IResponse = await this.charService.getAllPromises(url?url:undefined);
      if(response){     
        this.linkNext = response.links.next;
        this.linkPrevious = response.links.previous;
        this.arrCharactersPromises = response.items;
      }

    }catch(error){
      console.log(error)
    }
  }

  goToPrev(){
    this.cargarPersonajes(this.linkPrevious);
  }

  goToNext(){
    this.cargarPersonajes(this.linkNext);
  }

}

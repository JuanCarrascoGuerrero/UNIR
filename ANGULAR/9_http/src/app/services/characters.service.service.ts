import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersServiceService {
  
  //Creamos provideHttp en app.config.ts
  //... y lo inyectamos
  private httpClient = inject(HttpClient);

  //URL de la API
  private baseUrl : string = "https://dragonball-api.com/api/characters/" //conveniente añadir la '/' al final... buen patrón de trabajo

  /* 1 */
  /* OPCION OBSERVABLES de ANGULAR*/
  /* Peticiones asyncronas nativas de angular*/
                                
  getAllObservables() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }                     //.post .put .delete


  /* 2 */
  /* OPCIONES PROMESAS de ANGULAR */
  /* Peticiones asyncronas... convienten observable en promesa*/

  getAllPromises(url? : string) : Promise<any> {
  //                    (            El observable         )
    return lastValueFrom(this.httpClient.get(url?url:this.baseUrl));
          // o firstValueFrom segun quieras esperar al final del proceso o no... recomendamos last
  }



  /* UNICA DIFERENCIA A LA HORA DE CONSUMIRLO : Las promesas son mas facil de consumir*/


  //Ejemplo: Método para obtener un único personaje (any hasta que no tengamos IPersonaje)
  getById(id:number) : Promise<any>{
    return lastValueFrom(this.httpClient.get(`${this.baseUrl}${id}`));
  }                                           //Componer urls con ¿string compose? no me acuerdo como se llama





}

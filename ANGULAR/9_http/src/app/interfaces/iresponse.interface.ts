import { ICharacter } from "./icharacter.interface";


//OJO! ¡¡La API nos devuelve tambien meta y links en el response para la paginación!!
export interface IResponse {
    items: ICharacter[];
    meta:any;
    links:ILinks;
}

export interface ILinks {
    first: string;
    previous:string;
    next:string;
    last:string;
}

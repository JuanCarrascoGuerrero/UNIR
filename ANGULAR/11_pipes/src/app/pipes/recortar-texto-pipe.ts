import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarTexto'
})
export class RecortarTextoPipe implements PipeTransform {

    //PREDEFINIDO
  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  transform(value: string, ...args: any[]): string {
    console.log(args)
    //let cantidad = args[0] | 20             //<-- Aplicaciones definir predefinidos
    //let decorador = args[1] | "..."
    return value.slice(0,args[0]) + args[1];  //<-- Argumentos obligatorios?
  }

}
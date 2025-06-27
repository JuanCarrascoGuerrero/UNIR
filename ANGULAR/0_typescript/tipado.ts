
// Ventaja... Tiene TIPADO

//------------- variables (number, string, boolean, undefined, null)
let nombreTipado : string = "Juan";
let edad : number = 32;
let estado : boolean = true;
let nombreOnull : string | null = 'nombre';
let cualquiera: any = true;

//--------------Declarar Arrays
//opcion1
const nombres : string[] = ['Juan','Felix','Mario','JAntonio']  //...,2] daria error

//opcion2
const numeros : Array<number> = [1,2,3,4,5]

//---------------Funciones
                                               //tipado del return!
function sumarTipado (a : number, b : number)     : number             {
    return a+b
}
// const resultado = sumar(2, '7') <-- Compila y lanza error... '7' is not a number!




//opcion devuelve void
function returnVoid (a : number, b : number) : void {
    console.log(a + b)
}
//opcion funcion flecha
const restar = (a:number,b:number) : string =>{
    let resultado = a - b;
    return `El resultado de restar ${a} y ${b} es ${resultado}`
}

console.log(restar(9,12))


// Ventaja... Lenguaje transpilados (no se ejecuta on fly, se transpila a JS que es ejecutable)
                //* curiosidad: los transpilados son transformados a otro fichero distinto, 
                // kind of compilado~ejecutado. Ventaja-> captura errores
                // en consola cd ../ruta del ts>tec fichero.ts
                //                             > Error? No transpila y muestra error
                //                             > No hay error? Genera un fichero.js que es ejecutable


                                            //NODE: MOTOR JS
                // Correr el JS transpilado? > node fichero.js


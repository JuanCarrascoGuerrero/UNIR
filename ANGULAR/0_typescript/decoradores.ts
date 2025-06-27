// Un decorador es una funcion que se aplica a una propiedad(variable)
//                                           a una funcion
//                                           a una clase
//La funcion decoradora se aplica de forma anterior a la declaración del elemento
//FUNCION _> Complementa y añade funcionalidad al elemento que precede
//           Amplifica funcionalidad de un elemento descrito
//           "el óxido nitroso para un coche"
//           "Al método arrancar método le añado el decorador encender luces"


function miDecorador(constructor: Function){
    console.log('El decorador se ha ejecutado')
}


// @ + objeto Decorador  ... Añadimos funcionalidades del decorador a la clase
@miDecorador
class miClase{
    nombre:string = "";

    constructor(name:string){
        this.nombre = name;
        console.log('Bienvenido ' + this.nombre)
    }
}

const clase = new miClase('Juan')



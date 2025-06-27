// Ventaja... Tiene TIPADO
//------------- variables
var nombreTipado = "Juan";
var edad = 32;
var estado = true;
var nombreOnumero = 33;
var cualquiera = true;
//--------------Declarar Arrays
//opcion1
var nombres = ['Juan', 'Felix', 'Mario', 'JAntonio']; //...,2] daria error
//opcion2
var numeros = [1, 2, 3, 4, 5];
//---------------Funciones
//tipado del return!
function sumarTipado(a, b) {
    return a + b;
}
// const resultado = sumar(2, '7') <-- Compila y lanza error... '7' is not a number!
//opcion devuelve void
function returnVoid(a, b) {
    console.log(a + b);
}
//opcion funcion flecha
var restar = function (a, b) {
    var resultado = a - b;
    return "El resultado de restar ".concat(a, " y ").concat(b, " es ").concat(resultado);
};
console.log(restar(9, 12));
// Ventaja... Lenguaje transpilados (no se ejecuta on fly, se transpila a JS que es ejecutable)
//* curiosidad: los transpilados son transformados a otro fichero distinto, 
// kind of compilado~ejecutado. Ventaja-> captura errores
// en consola cd ../ruta del ts>tec fichero.ts
//                             > Error? No transpila y muestra error
//                             > No hay error? Genera un fichero.js que es ejecutable
//NODE: MOTOR JS
// Correr el JS transpilado? > node fichero.js

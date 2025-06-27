// Ventaja... Tiene TIPADO
//------------- variables
var nombreTipado = "Juan";
var edad = 32;
var estado = true;
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
// Ventaja... Lenguaje compilado (no se ejecuta on fly)
//* curiosidad: los transpilados son transformados a otro fichero distinto, kind of compilado~ejecutado

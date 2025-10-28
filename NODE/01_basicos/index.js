/*COLORS*/
var colores = require('colors');

//ejemplos de implementaciones
console.log('Hola mundo!'.green);
console.log('Hola mundo!'.trap);

/*AXIOS*/
var axios = require('axios');
const operaciones = require('./operaciones');

//Promeses... a tope con NODE

/*Ejemplo con axios
Buena practicas:
    1 dejar cursor sobre el get y ver que devuelve, para AXIOS Promise<axios.AxiosResponse<any, any, {}>>
    2 Buscar documentacion (en este caso AxiosResponse) para ver su definicion (en este caso tiene atributos data,status,etcc)
*/
    //1 Alternativa then-catch
axios.get('https://peticiones.online/api/series')
.then(response => console.log(response.status))  // ¿status? Mirar documentacion AxiosResponse
.catch(error => console.log(error));
    //2 Alternativa async-await
//**Alternativa si no ha function... funciones ad hoc que se auto ejecutan!!! (()=>{})(); */
( async ()=>{
try {
        const response = await axios.get('https://peticiones.online/api/series') //equivalente al then
        console.log(response.data);                 // ¿data? Mirar documentacion AxiosResponse
} catch (error) {
        console.log(error);
}
})(); 
    
//Importando librería local del proyecto

const operaciones = required('./operaciones');

console.log(operaciones.sumar(4,3));
console.log(operaciones.restar(4,3));


//DESTRUCTURING PARA DENOMINAR INDIVIDUALMENTE LO QUE NECESITAMOS
const{sumar, restar} = required('./operaciones');
console.log(sumar(4,3));
console.log(restar(4,3));


//Ejemplo Contacto.js
const Contacto= required('./Contacto');

const contacto1 = new Contacto('Juan','Itstricky','929983982')

console.log(contacto1.nombre);

contacto1.nombre = 'John';

console.log(contacto1.nombre);

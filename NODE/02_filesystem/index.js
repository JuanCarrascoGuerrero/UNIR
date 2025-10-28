/*ejecutamos en el CMD en directorio del proyecto > node index.js */

import fs from 'node:fs'

//PARCHE PARA LAS PROMISES, ANTES NO EXISTIAN!
//...Destructuring para traer solo el readdir, para este ejemplo
import {readdir} from 'node:fs/promises'

//3 formulas que hacen lo mismo
//Vamos a definirlos con el ejemplo de la funcion readdir de FileSystem que lee el directorio

//[1] Síncrona
const data1 = fs.readdirSync('../01_basicos');
console.log(data1);

//[2] Asincrona - callback
//              funcion pasada como parámetro de otra
//              Se ejecuta cuando pasen ciertas cosas -> funcion(parametros,callback)
//              recuerda buena practica, cursor sobre el metodo para entender estructura
//              observamos callback: (err: NodeJS.ErrnoException | null, files: string[]) => void)
fs.readdir('../01_basicos', (err,data2)=>{
    console.log(error);
    console.log(data2);
})
console.log('Este console puede ejecutarse antes, estamos en asyncronia')


//[3] Asincrona -promise  // HACE FALTA PARCHE PARA ESTA LIBRERÏA, MIRAR ARRIBA imports

//Opcion then catch
readdir('../01_basicos')
    .then((data3)=>{console.log(data3)})
    .catch((error)=>{console.log(error)});

//Opcion async await --> MEJOR OPCION !! Evita anidamientos, añadimos en el desarrollo de la funcion lo que queremos
                //Creamos una funcion o creamos esa funcion autollamada como en el ejemplo
(async ()=>{
try {
        const data4 = await readdir('../01_basicos');
        console.log(data4)
        //...etc
} catch (error) {
        console.log(error);
}
})();

// Algunas herramientas de promises, añadir apuntes promises
/*
Promise.all()
Promise.race()
*/
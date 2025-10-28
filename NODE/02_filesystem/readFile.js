import { existsSync, mkdir } from 'node:fs';
import {readFile, appendFile} from 'node:fs/promises'

(async ()=>{
 try {
    const content = await readFile('../01_basicos/operaciones.js', 'utf-8');
    console.log(content);                                       //Sin el parametro encoding devuelve bites
 } catch (error) {
    console.log(error);
 }
})()

//Escribir fichero dentro de la carpeta /lib

(async ()=>{
 try {
    if(!existsSync('./lib')){
        await mkdir('./lib');   // Devuelve una promesa!
    }
    await appendFile('../prueba.txt', 'Una linea\n dentro del fichero\n');
    //esta funcion devuelve void                                      
 } catch (error) {
    console.log(error);
 }
})()
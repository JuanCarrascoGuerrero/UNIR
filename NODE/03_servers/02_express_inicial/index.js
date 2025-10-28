//Librería (en este caso ejemplo por module, podria ser native common tambien)
import express from "express";
import dotenv from 'dotenv';

/* Añadido ENVRONEMENT */
//... aplicando el .env
//1 Nativamente
    /*
    Incorporamos flag en los scripts de RUN del package.json  --env-file=
    */
    //console.log(process.env); //<-- acceder al environement de la aplicacion
    console.log(process.env.PORT);

//2 Librería externa (dotenv)
    // en el CMD > npm install dotenv
    // lo importamos en el fichero donde lo usamos (mira prinipio de este fichero)
    //Cargamos variables entorno en process.env
    dotenv.config();
    console.log(process.env.PORT); //Ya está, en documentacion hay mas utilidades
//3 
/******************/




//Creamos aplicacion servidor
const app = express();

//verbo y url
app.get('api/pacientes',(req,res)=>{res.send('Recupera pacientes')});
app.post('api/pacientes',(req,res)=>{res.send('Crea pacientes')});


//Añadido environement:
const PORT = process.env.PORT || 3000;  //Si hay propiedad fichero entorno, lo cojes de ahí

//Asignamos puerto y (opcional) callback de entrada 
app.listen(PORT,()=>{console.log('Aplicacion arrancada en 3000')})














import mongoose from "mongoose";

const conexion = mongoose.connect('mongodb://localhost:27017/api-shop')

console.log("Conectado a BBDD")

//Ejemplo sencillo en app.js de como con un simple get
//ya genera la colección en la base de datos

export default conexion;
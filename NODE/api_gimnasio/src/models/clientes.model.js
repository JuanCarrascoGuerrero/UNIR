const db = require('../config/db');


const getAll = async (req, res)=>{
    //El try catch hace que no entre en accion el controlador general de errores del app.js
    //Pasa a ser un error gestionado aquí
try {
        //es un destructuting --> [0] -- [datos] posicion 0
        //                        [1] -- [,datos] si quisiera la posicion 1...  etc
        const [datos] = await db.query('select * from clientes');
    
        return datos; // array con todos los clientes
} catch (error) {
    //res.status(501).
}
}

//Pasamos un objeto {} con las claves de nuestro elemento a guardar en la tabla
//Si tuvieramos TypeScript podríamos crear un interface con la estructura pero...
//..aquí estamos con JS plano, en NODE.
//A ver si sale DENO!
const create = async ({nombre, apellidos, edad, email, direccion, genero, 
    cuota, fecha_nacimiento, dni}) =>{
    const result = await db.query(
        'insert into clientes (nombre, apellidos, edad, email, direccion, genero, cuota, fecha_nacimiento, dni) values (?,?,?,?,?,?,?,?,?)',
        [nombre, apellidos, edad, email, direccion, genero,cuota, fecha_nacimiento, dni]
    );
    return result;
}

module.exports = {getAll,create}
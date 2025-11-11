const db = require('../config/db');


const getAll = async (req, res)=>{
    //El try catch hace que no entre en accion el controlador general de errores del app.js
    //Pasa a ser un error gestionado aquí
try {
        //es un destructuting --> [0] -- [datos] posicion 0
        //                        [1] -- [,datos] si quisiera la posicion 1...  etc
        const [datos] = await db.query('select * from clientes');
                        //.query siempre devuelve -> Promise<[QueryResult, FieldPacket[]]>
        return datos; // array con todos los clientes
} catch (error) {
    //res.status(501).
}
}

const getById = async (id) =>{
    const [result] = await db.query('select * from clientes where id = ?', [id]);
    //Como la query es un select la variable result recoje un array
    if(result.length === 0) return null; //Si no hay ná null
    return result[0];
}

const updateCliente = async (id, {nombre, apellidos, edad, email, direccion, genero, 
    cuota, fecha_nacimiento, dni}) =>{
       const [result] = await  db.query('update clientes set nombre = ?, apellidos = ?, edad = ?, email = ?, direccion = ?, genero = ?, cuota = ?, fecha_nacimiento = ?, dni = ? where id = ?',
            [nombre, apellidos, edad, email, direccion, genero,cuota, fecha_nacimiento, dni, id]
        );
        return result;
    }

//Pasamos un objeto {} con las claves de nuestro elemento a guardar en la tabla
//Esto ayuda a la hora de crear el body del request porque los valores estan pareados con sus claves
//Si tuvieramos TypeScript podríamos crear un interface con la estructura pero...
//..aquí estamos con JS plano, en NODE.
//A ver si sale DENO!
const insertCliente = async ({nombre, apellidos, edad, email, direccion, genero, 
    cuota, fecha_nacimiento, dni}) =>{
        // Estructura de los insert:
        //   db.query(insert into table (cols) values (?), [cols])
    const [result] = await db.query(    //<- restructuring... recupera solo la primera columna, nombre
        'insert into clientes (nombre, apellidos, edad, email, direccion, genero, cuota, fecha_nacimiento, dni) values (?,?,?,?,?,?,?,?,?)',
        [nombre, apellidos, edad, email, direccion, genero,cuota, fecha_nacimiento, dni]
    );
    return result;
}

const removeCliente = async (id) =>{
       const [result] = await  db.query('delete from clientes where id = ?',
            [id]
        );
        return result;
    }

//RECUERDA EXPORTAR
module.exports = {getAll,getById,updateCliente,insertCliente, removeCliente}
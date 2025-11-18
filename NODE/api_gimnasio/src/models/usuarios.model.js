const db = require('../config/db');



const selectById = async (usuarioId) =>{
    const [result] = await db.query('select * from staff where id = ?',
        [usuarioId]);
  
    if(result.length===0) return null
    console.log(result);
    return result;
}

const selectByEmail = async (email) =>{
    const [result] = await db.query('select * from staff where email = ?',
        [email]);
    if(result.length===0) return null
    
    return result[0];
}

const insert = async ({username,email,password})=>{
        const [result] = await db.query('insert into staff (username,email,password) values (?,?,?)',
            [username,email,password]
        );
                        //.query siempre devuelve -> Promise<[QueryResult, FieldPacket[]]>
        return result[0]; 
}

//RECUERDA EXPORTAR
module.exports = {insert,selectById,selectByEmail}
const UsuarioModel = require('../models/usuarios.model')
const jwt = require('jsonwebtoken');

//Esta en las rutas principales de app.routes

const checkToken = async (req,res,next) =>{
    //¿Existe Header auth token?
                    //Como array salvamos los casos de '-' como Content-Type si fuera
    if(!req.headers['authorization']){  //Siempre en minusculas en Express
        return res.status(403).json({message:'Incluye Authorization en el Header del request!'})
    }
    const token = req.headers['authorization'];

    //¿El token es correcto?
    let data;
    try {
        data = jwt.verify(token,process.env.SECRET_KEY);
    } catch (error) {
        res.status(403).json({error:error.message})
    }

    //¿Existe el usuario en la base de datos, baneado, no ha pagado, ...etc?
    const usuario = await UsuarioModel.selectById(data.usuarioId);
    if(!usuario){
        return res.status(401).json({message:'Error de autentificacion'});
    }
    next();
}

module.exports = {checkToken}
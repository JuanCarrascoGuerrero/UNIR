
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const checkToken = async (req,res,next) =>{
    if(!req.headers['authorization']){return res.status(403).json({message:'Incluye header'});}
    
    const{ authorization:token } = req.headers;
    
    let data;

    try {
        data = jwt.verify(token, 'secretkey,perico');
    } catch (error) {
        return res.status(400).json({message:'Error auth'})
    }
    
    //Inetersante aqui guardar el usuario para tenerlo en routas posteriores
    const user = await User.findById(data.userId)
    if(!user){return res.status(403).json({message:'user no existe'})}
    
    //Modificamos la peticion, añadimos los datos de user
    req.user = user;

    next();
}
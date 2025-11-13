const ClienteModel = require('../models/clientes.model')
//Esqueleto de un middleware
/*const checkClienteId = (req,res,next) =>{

}*/

const checkClienteId = async (req,res,next) =>{
    //console.log('Pasa por el middleware');
    const {id} = req.params;
    if(isNaN(id)){      //Is not a number?
        return res.status(400).json({message:'El ID del cliente debe ser un número'})  //Ojo a los tipos de error, mirarlos
    }
    const cliente = await ClienteModel.getById(id); //¿Existe en la BD?
    if(!cliente){
        return res.status(404).json({message:'El cliente no existe'})  //Ojo a los tipos de error, mirarlos
    }   //importante el return para trampear antes del next

    //MÁS ALLÁ
    //En el middleware pordemos adelantar cosas al controller
    req.cliente = cliente;
    next();
}

module.exports = {checkClienteId}
const ClienteModel = require('../models/clientes.model')

const getAll = (req, res) => {
    const datos = ClienteModel.getAll(); //Ojo! Aqui el array esta en el RESPONSE
    res.json('clientes');               // ... que es formato JSON
}

const create = async (req, res) => {
    //TODO: Antes habría que añadir validaciones
    const result = await ClienteModel.create(req.body);
}

module.exports = { getAll, create }

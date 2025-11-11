const ClienteModel = require('../models/clientes.model')


//Atención, ¡ Aquí olvide poner el metodo asíncrono y me devolvía {} !
const getAll = async (req, res) => {
  try {                                         //Ojo! Aqui el array esta en el RESPONSE
    const datos = await ClienteModel.getAll(); // ahora sí, array de clientes
    res.json(datos); // devuelve el JSON con los clientes
  } catch (error) { //Control propio de error en lugar de delegarlo en el app.js handler
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
};

const getById = async (req,res) => {
  try {     
    //req.params para capturar la parte variable de una URL
    const{id} = req.params; //<-- Destruturin weno (Aqui me equivoqué... puse [clienteId] pero el parametro es :id asi que el destructuring viene de req.params.id y debe ser [id])
    const cliente = await ClienteModel.getById(clienteId); 
    //vertiente negativa
    //404, es elegante devolver status pues en caso contrario devovlemos un 200
    if(!cliente) return res.status(404); 
    res.json(cliente); // devuelve el JSON con el cliente o nulo
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener cliente' });
  }
};

const update = async (req,res) => {
    //req.body --> los datos a actualizar
    // req.params.id
    const {id} = req.params;
    await ClienteModel.updateCliente(id,req.body);
    //Volvemos a lo visto en create de este mismo controller... vamos a arreglar la salida del método
    const cliente = await ClienteModel.getById(id);
    return res.json(cliente);
}

const create = async (req, res) => {
    // TODO: Antes habría que añadir validacione  s
    const result = await ClienteModel.insertCliente(req.body);

    //res.json(result);
    /* Este es el objeto que devuelve por defecto, donde interesa el ID...
        {
            "fieldCount": 0,
            "affectedRows": 1,
            "insertId": 150,
            "info": "",
            "serverStatus": 2,
            "warningStatus": 0,
            "changedRows": 0
        }
    Demasiada chasca... es importante enviar al front lo necesario
    Vamos a recuperar el elemento insertado por id
    que es lo que el ront demanda
    */
   const cliente = await ClienteModel.getById(result.insertId);
   res.json(cliente);
}

const remove = async (req,res) => {

    const {id} = req.params;
    const cliente = await ClienteModel.getById(id);
    /*const result =*/ await ClienteModel.removeCliente(id);

    //return res.json(result); // igual... nos devuelve un objeto con poca chicha
    /*
    {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "info": "",
        "serverStatus": 2,
        "warningStatus": 0,
        "changedRows": 0
        }
    */
   return res.json(cliente);

}


module.exports = { getAll, getById, update, create, remove }

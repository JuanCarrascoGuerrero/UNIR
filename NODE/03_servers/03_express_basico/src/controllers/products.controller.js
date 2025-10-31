import db from '../config/db.js'

export const getAllProducts = async (req, res) => {
  const result = await db.query('select * from paciente');
  console.log(result);
  res.send('recupero todos los productos');
};

export const getProductById = (req, res) => {
  console.log(req.params);
  res.json({message:'recupero un producto'})
};

export const getProductPaged = (req, res) => {
  console.log(req.query);
  res.json({message:'recupero productos paginados'})
};

export const createProduct = (req,res) => {
  res.send('creamos un producto')
}
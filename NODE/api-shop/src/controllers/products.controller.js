
import Product from '../models/products.model.js'

export const getAll = async (req, res) => {
  // Implement your logic here    //.populate! Puede traer data de otra colección! --> ('atributo relaciona', 'datos de la coleccion relacionada que quieres traer')
  const products = await Product.find().populate('owner', '-_id username email');//ahora en esta peticion devuelve --> owner:{datos del user}
  res.json(products);                               //El remate... menos _id : -_id quita _id de la relación
};

export const getById = async (req, res) => {
  const {productId} = req.params;
  const product = await Product.findById(productId);
  res.json(product);
};

//Filtra por categoria y stock > 10
export const getByCategoryStock10 = async (req, res) => {
  const {categoryName} = req.params;
  const products = await Product.find({
    category:categoryName,
    stock: { $gte: 10}
  });
  res.json(products);
};

export const create = async (req, res) => {
  //Asignacion "relacional" del owner
  req.body.owner = req.user._id;

  const newProduct = await Product.create(req.body);
  res.json(newProduct);
}

export const update = async (req, res) => {
  const {productId} = req.params;                                         //este 3er parámetro hace que nos devuelva en response l producto actualizado, ya que por defecto nos devuelve el original
  const updatedProduct = await Product.findByIdAndUpdate(productId,req.body,{new:true});
  res.json(updatedProduct);
}

export const remove = async (req, res) => {
  const {productId} = req.params; 
  const removedProduct = await Product.findByIdAndDelete(productId);
  res.json(removedProduct);
}
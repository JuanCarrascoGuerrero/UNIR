const ClienteModel = require('../models/clientes.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { insert } = require('../models/usuarios.model');

const UsuarioModel = require('../models/usuarios.model');

const register = async (req, res) => {
  // req.body --> username email password
  // Conviene encriptar antes de grabar contraseñas
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  //INSERTAR REGISTRO (y manejar errores, sino acaban en 500 como si la falta fuera nuestra)
  const resultado = await UsuarioModel.insert(req.body);
  //Devolver datos nuevo usuario y mensaje
  const usuario = await UsuarioModel.selectById(resultado.insertId);
  delete usuario.password;
  res.json({
    message: 'Usuario registrado con éxito',
     usuario}); 
};

const login = async (req,res) => {
  const{email,password} = req.body;
  //¿Existe el email?
  //Recupero el usuario
  const usuario = await UsuarioModel.selectByEmail(email);
  if(!usuario){
    return res.status(401).json({message:'Error de autentificacion'});
  }
  
  //¿Coinciden las password?
  const iguales = bcrypt.compareSync(password,usuario.password);
  if(!iguales){
    return res.json({message:'Error de autentificacion'});
  }
  return res.json({
    message:'login correcto',
    token: jwt.sign(
      {usuarioId:usuario.id}, 
      process.env.SECRET_KEY)
  });

};



module.exports = { register, login }

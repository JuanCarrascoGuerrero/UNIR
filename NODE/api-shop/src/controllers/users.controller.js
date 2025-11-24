import { hashSync, compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import dayjs from "dayjs";
import User from "../models/user.model.js";


export const register = async (req, res) => {
  // Implement your logic here
  req.body.password = hashSync(req.body.password, 12);
  const newUser = await User.create(req.body);
  res.json(newUser);
};

export const login = async (req, res) => {

  const {email, password} = req.body;

  const user = await User.findOne({
    email
  })
  if(!user){return res.status(401).json({message:'error email y/o contraseña'})}

  const equals = compareSync(password, user.password);
  if(!equals){return res.status(401).json({message:'error email y/o contraseña'})}

   //JWT TOKEN                                                               //a la fecha actual + 10 minutos (libreria dayjs)
  res.json({token:jwt.sign({userId: user._id, userRole: user.role, exp:dayjs().add(10,'minutes').unix()}, 'secretkey,perico')})
};

export const addToCart = async (req, res) => {
  const {productId} = req.body;

  req.user.cart.push(productId)
  await req.user.save(); //<- Esque esto es objeto Mongoose, esta rescatado de un find. El tratamiento es distinto

  res.json({message:'Producto agregado'})
};

export const profile = async (req, res) => {

  res.json(req.user)
};

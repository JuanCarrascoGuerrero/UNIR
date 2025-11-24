import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role: String,
    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }]   //igual que referencia relacional que pusimos en products pero OJO! aqui entre corchetes porque puede devolver un array de productos!! @ManyToOne
},
{versionKey:false, timestamps:true}
);

const User = model('user',userSchema); //Siempre que interactuemos con este modelo/coleccion tiene que tener la siguiente estructura/esquema
                            //ya que mongodb es tan laxo

export default User;
import { Schema, Types, model } from "mongoose";

//Schema con los types de tipo mongoose
const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    stock: Number,
    available: Boolean,
    owner: {                        //RELACIONES EN MONGODB NoSQL
        type: Schema.Types.ObjectId,    //por _id
        ref: 'user'                     //con la colección user
    }
},
{versionKey:false, timestamps:true} //configuraciones extra mongoose... una quita el version del documento v__ y otra añade timestapms
);

//nombre en singular de BBDD... crea el nombre de la coleccion añadiendole la 's'
//Si metemos tercer parámetro podemos setear el nombre de la coleccion
const Product = model('product',productSchema)

//Si no expecificamos en el import, se importa el default
export default Product;
 
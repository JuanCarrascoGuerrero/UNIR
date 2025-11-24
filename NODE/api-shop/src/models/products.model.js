import { Schema, Types, model } from "mongoose";

//Schema con los types de tipo mongoose
const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    stock: Number,
    available: Boolean,
    image: String,
    owner: {                        //RELACIONES EN MONGODB NoSQL
        type: Schema.Types.ObjectId,    //por _id
        ref: 'user'                     //con la colección user
    }
},
{versionKey:false, //configuraciones extra mongoose... una quita el version del documento v__ 
    timestamps:true,//y otra añade timestapms
    toJSON: {virtuals:true} //añade al JSON propiedades virtuales
} 
);
/* CAMPOS VIRTUALES */
//No estan en la base de datos pero si en el modelo de NODE
productSchema.virtual('priceTaxes').get(function () {return Math.round(this.price  * 1.21);})

/* METODOS ESTATICOS STATIC */
//Ejemplo, ponemos active a los documentos que tengan available true y stock mayor de 10
//ver products controller
productSchema.statics.actives = function () {
    return this.model('product').find({  //<- Accedemos al modelo dentro del propio moedlo
        available: true,
        stock:{$gte: 10}
    })
}

//nombre en singular de BBDD... crea el nombre de la coleccion añadiendole la 's'
//Si metemos tercer parámetro podemos setear el nombre de la coleccion
const Product = model('product',productSchema)

//Si no expecificamos en el import, se importa el default
export default Product;
 
/*Scripts para ejecutar en le shell de mongodb*/
//EN EL SCRIPT DE COMANDOS:

/*             mongosh             "conexion"                               "url del script"
C:\Users\juanc>mongosh "mongodb://localhost:27017/ejemplo" "C:\Users\juanc\Documents\UNIR\MONGO\crud.js"
*/

conn = new Mongo();
db = conn.getDB('ejemplo');


//Fuinciones Mongo "insertOne, insertMany, find"
resultInsertOne = db.contactos.insertOne({
    nombre: "Juan",
    email: "juanmail.com",
    telefono: "959959995",
    edad: 29,
    disponible: true
});

resultInsertOne = db.contactos.insertMany([
    {
    name: "Juan",  //<-- Name? no es nombre? en no relacionales es totalmente flexible
    email: "mail2.com",
    telefono: "88888",
    edad: 12,
    disponible: true
    },
    {
    nombre: "Meri",
    email: "meri.com",
    telefono: "89898",
    edad: 50,
    disponible: false
    },
]);


/***********FIND*************/
//Imprimamos los valores de esta coleccion de nuestra base de datos
result = db.contactos.find();

//<-- Podemos filtrar (como hacemos con sql WHERE) 
// Ejemplo: Solos los disponible = true y edad mayor 30
result = db.contactos.find({
    disponible:true,
    edad:{ $gt: 30, $lt: 30}  // Hay operadores predeterminados mongo, ejemplo ">" es "$gt"
});                           //                                               "<" es "$lt"
                              // Mayor e igual ($gte) Menor e igual ($lte)
                              // ($in) ($or)
printjson(result);

//<-- Ejemplo con OR  Solos los disponible = true OR edad mayor 30 menor de 60
resultOr = db.contactos.find({
$or: [
    {edad:{ $gt: 60, $lt: 30}},
    {disponible:false}
  ] 
}); 

printjson(resultOr);


/***********UPDATE*************/

actualizar = db.contactos.updateOne(
    {email:"meri.com"}, //<--Primer argumento, el WHERE elemento
    {$set: {edad:27}}   //<-- $set : {objeto con elementos a cambiar}, hay mas, $push, etc...
);

printjson(actualizar);


actualizar2 = db.contactos.updateMany(
    {edad:{$lte: 30}}, //<--Primer argumento, el WHERE elemento
    {
        $push: {hobbies:'redes sociales'},//<-- $push : {objeto con elementos a pushear}
        $currentDate: {updatedAt: true}}  //<-- $currentDate : {objeto con fechas}

);

printjson(actualizar2);


/***********DELETE*************/

borrar = db.contactos.deleteOne(
    {email:"juanmail.com"}   //<--Primer argumento, el WHERE elemento
);

printjson(borrar);

borrar2 = db.contactos.deleteMany(
    {hobbies:{$in: ["peinar"]}}   //<--Primer argumento, el WHERE elemento. $in para arrays
);

printjson(borrar2);
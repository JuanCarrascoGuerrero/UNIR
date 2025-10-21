
/*EN EL COMPASS ESTA LA INTERFAZ TAMBIEN: AGGREGATIONS*/

conn = new Mongo();
db = conn.getDB('ejemplo');

resultadoAgregado = db.movies.aggregate([           //STAGES
    {$match: {'imdb.rating':{$gt:9.2}}},            // los que tengan rating < 9.2
    {$sort: {'imdb.rating': -1}},                   // ordenados de manera DESC
    {$project: {title:1,year:1,'imdb.rating':1}}    // solo muestra los campos :1

]);

printjson(resultadoAgregado);   


//imdb.rating es objeto en la respuesta... lo renombramos en un nuevo campo para evitarlo

resultadoAgregado2 = db.movies.aggregate([                   //STAGES
    {$match: {'imdb.rating':{$gt:9.2}}},            
    {$sort: {'imdb.rating': -1}},                   
    {$project: {title:1,year:1,rating:'$imdb.rating'}}    // renombramos campo (ejemplo rating)... '$' si es un campo de nuestros documentos

]);

printjson(resultadoAgregado2);

resultadoAgregado3 = db.movies.aggregate([                   //STAGES
    {$match: {'imdb.rating':{$gt:9.2}}},                             
    {$project: {title:1,year:1,rating:'$imdb.rating',wins:'$awards.wins'}},    
    {$sort: {wins: -1}},                                    //nutrimos de creqaciones anteriores (ejemplo campo wins)
    {$limit: 10}                                            // limita el output, solo muestra 10
]);

printjson(resultadoAgregado3);

resultadoAgregadoAgrupando = db.movies.aggregate([           //STAGES
    {$group: {_id: '$year', total: {$sum: 1}}},            // obligatorio _id sobre el que agrupamos... '$' si es un campo de nuestros documentos
                                                           // podemos crear el aleas (ejemplo total)que resulte operaciones (ejemplo $sum: 1) $max, $min, $avg,...
    {$sort: {total: -1}},                                  // ordenados de manera DESC

]);

printjson(resultadoAgregadoAgrupando);


//otros stages
/*
$unwind : '$nombreElemento' -> para elementos arrays crea una copia del documento con cada elemento del array
$count : 'aleas'            -> hace el count de resultados
*/
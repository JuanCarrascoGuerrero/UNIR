conn = new Mongo();
db = conn.getDB('ejemplo');

//Ejemplo cuantos documentos cuyo rating > 9
count = db.movies.countDocuments(
    {'imdb.rating': {$gte:9}}  //Para objetos el '.' en el acceso del 'objeto.propiedad'
)

printjson(count);

//datos estadisticos del find
estatisticsFind = db.movies.explain('executionStats').find(
    {'imdb.rating': {$gte:9}}  //Para objetos el '.' en el acceso del 'objeto.propiedad'
)

printjson(estatisticsFind);

///*/*/*/*/*/*/*/*CREAMOS INDICES PARA GUARDAR BUSQUEDAS RECURRENTES, REPETIDAS

indice = db.movies.createIndex({
    'imdb.rating': 1   //1 incremental, -1 decremental
})

printjson(indice);  //devuelve el nombre que le ha dado a ese indice

estatisticsFind = db.movies.explain('executionStats').find(
    {'imdb.rating': {$gte:9}}  
)
printjson(estatisticsFind); //AHORA, con el indice, 
                            // el rendimiento ha MEJORADO MUCHO!!!



//¿Sabes que indices tenemos creados?
indices = db.movies.getIndexes()
printjson(indices); 
//*/*/*/*//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*


//TRaemos librería inter node
const http = require('node:http');

//CReamos servidor
const server = http.createServer((request,response)=>{
    console.log(request);                       //Parámetro con la peticion + cabeceras,...
    response.end('Respuesta a la petición')     //Respuesta del servidor
});

//Definimos puerto virtual de escucha
server.listen(3000)

// > node index.js              En la carpeta del proyecto por CMD
// En el navegador Localhost:3000 tenemos la actividad del servidor...

/* Con estas líneas ya tendriamos un servidor back de peticiones.
Sin embargo, aunque NODE nos vendia su servidor nativo como definitivo tiene limitaciones...
    (*) Si tenemos muchas URL habría que generar [else if, else if, ...etc] por cada una
    (*) Además, habiendo verbos, else if para cada verbo [GET, PUT, DELETE, ....]
    (*) Esto esta SOLUCIONADO con algunos FRAMEWORKS, por ejemplo en el curso EXPRESS
*/
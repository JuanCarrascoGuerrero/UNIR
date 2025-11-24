
const http = require('node:http');
const socketIO = require('socket.io');

require('dotenv').config(); //Lo primero nada mas intalar librería... Habilita el process.env

//Haciendo CONSTANTES para evitar errores
const events = {
    CONNECTION: 'connection',
    CHAT_MESSAGE: 'chat_message',
    CHAT_MESSAGE_SERVER: 'chat_message_server',  //podrian sustituir los values como events.CONNECTION por ejemplo para 'connection'
    CLIENTS_COUNT: 'clients_count'
}

//Necesitamos SERVER para administrar mensajes de chat
//creamos un servidos de peticiones...
const server = http.createServer((req,res)=>{
    res.end('OK')
})

// y lo ponemos a escuchar en un puerto en concreto
const PORT = process.env.PORT || 3000;
server.listen(PORT);

// Socket Server
//es una funcion(servidor, {dominios})
const io = socketIO(server,{
    cors:{origin:'*'}
})

//Quiero enterarme primero cuando se conectan los clientes
//   como el addEventListener, en SocketIO es on('connection') evento connection
io.on('connection', (socket)=>{ //<- aqui esta el canal, el socket
    
    //broadcast emite a todos menos al que se conecta
    socket.broadcast.emit(events.CHAT_MESSAGE_SERVER, {
        name:'INFO',
        message:'Se ha conectado un nuevo usuario'
    })

    //Enviamos a todos el numero de clientes conectados
    io.emit(events.CLIENTS_COUNT, io.engine.clientsCount);
    
    // chat_message es el nombre que le hemos dado al evento
    socket.on('chat_message', (data)=>{ //<- aqui esta el data que viaja en el socket
        console.log(data)
        io.emit('chat_message_server',data)
    });
});
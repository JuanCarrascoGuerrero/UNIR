
const http = require('node:http');
const socketIO = require('socket.io');
const ChatMessage = require('./model/chatmessage.model.js')
const {OpenAI} = require('openai')

require('dotenv').config(); //Lo primero nada mas intalar librería... Habilita el process.env
require('./config/db.js');

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
    
    console.log(socket.id);  //IDENTIFICADOR DEL SOCKET

    //broadcast emite a todos menos al que se conecta
    socket.broadcast.emit(events.CHAT_MESSAGE_SERVER, {
        name:'INFO',
        message:'Se ha conectado un nuevo usuario'
    })

    //Enviamos a todos el numero de clientes conectados
    io.emit(events.CLIENTS_COUNT, io.engine.clientsCount);
    
    // chat_message es el nombre que le hemos dado al evento
    socket.on('chat_message', async (data)=>{ //<- aqui esta el data que viaja en el socket
        console.log(data)
        if(data.message.startsWith('/cuento')){ //METEMOS ALGO DE AI
            const personajes = data.message.split('/cuento')[1]
            const cuento = await generarCuento(personajes);
            const imagen = await generarImagen(cuento);
            io.emit(events.CHAT_MESSAGE_SERVER, {
                /*name: data.name,
                socketId: data.socketId,*/
                ...data, //Lo mismo que lo anterior!
                message: cuento
            })
            await ChatMessage.create({...data,message:cuento});
        }else{
            //Agregamos mensaje a la bbdd
            await ChatMessage.create(data);
            io.emit('chat_message_server',data)
        }
    });

    //Añadimos escuchador global del disconnect
    socket.on('disconnect', ()=>{
        console.log('se desconecta');
        io.emit(events.CHAT_MESSAGE_SERVER, {
            name: 'INFO',
            message:'Se ha desconectado un usuario'
        });
        //Y reutilizamos enviar a todos nº de conectados
        io.emit(events.CLIENTS_COUNT, io.engine.clientsCount);
    })
});


//Funciones con motor AI
async function generarCuento(personajes){
    const client = new OpenAI({
        apiKey: process.env.OPEN_AI_API_KEY //APIKey es de pago, es posible que no funcione
    });

    const response = await client.chat.completions.create({
        model:'chatgpt-4o-latest',
        messages: [
            {role:'system', content: 'Eres un bot dentro del chat y te dedicas a la creacion de cuentos. Debes generar cuentos con una longitud menor a 200 caracteres'},
            {role: 'assistant', content: 'Debes hablar siempre en verso'},
            {role:'user', content: `Debes generar un cuento con estos personajes: ${personajes}`}
        ]
    })

    return response.choices[0].message.content;
}

async function generarImagen(cuento){
    const client = new OpenAI({
        apiKey: process.env.OPEN_AI_API_KEY
    });

    const response = await client.images.generate({
        model:'dall-e-3',
        prompt:`Crea una imagen para ilustrar este cuento: ${cuento}`,
        n:1, //nº images
        size:'1024x1024'
    })

    return response.data[0].url; //url temporal de la imagen
}
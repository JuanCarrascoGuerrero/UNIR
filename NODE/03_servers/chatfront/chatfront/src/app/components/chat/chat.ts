import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { io } from 'socket.io-client';
import ChatMessage from '../../interfaces/chatmessage';

@Component({
  selector: 'app-chat',
  imports: [ReactiveFormsModule],
  templateUrl: './chat.html',
  styleUrls: ['./chat.css']
})
export class ChatComponent {

  //Aqui esta el socket, el canal de comunicacion con el server
  socket = io('http://localhost:3000');

  messages : ChatMessage[] = [];
  clientsCount: number = 0;

  chatForm: FormGroup = new FormGroup({
    name: new FormControl(),
    message: new FormControl()
  });


  //EN EL MISMO SITIO EMITO Y ESCUCHO
  ngOnInit(){
    this.socket.on('chat_message_server', (data: ChatMessage)=>{
      console.log(data.message)
      this.messages.push(data);
    })
    this.socket.on('clients_count', (clientsCount: number)=>{
      this.clientsCount = clientsCount;
    })
  }

  onSubmit(){
    console.log('Emitiendo');
    this.chatForm.value.socketId = this.socket.id; //Modificamos objetos pre servidor para que adjunte el ID
    this.socket.emit('chat_message', this.chatForm.value)
        //evento emit('nombre de evento a elección',lo que enviamos)
    console.log( this.chatForm.value)

    this.chatForm.get('message')?.reset();

  }
}



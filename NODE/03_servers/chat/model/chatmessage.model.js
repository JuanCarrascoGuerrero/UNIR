const {Schema, model} = require('mongoose')

const cmSchema = new Schema(
    {name: String,
    message:String},
    {versionKey:false,timestamps:true}
    )

const ChatMessage = model('chat_message', cmSchema)
module.exports = ChatMessage;
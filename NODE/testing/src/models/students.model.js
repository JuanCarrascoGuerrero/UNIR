const {model, Schema} = require('mongoose');

const studentSchema = new Schema({
    name: String,
    email: String,
    address: String,
    phone: String
}, {versionKey:false, timestamps:true})

const Students = model('student', studentSchema);
module.exports = Students;


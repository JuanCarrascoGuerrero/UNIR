const mongoose = require('mongoose');

console.log('Connected to mongo')
mongoose.connect(process.env.MONGO_URL)
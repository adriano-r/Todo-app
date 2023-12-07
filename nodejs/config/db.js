const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/NewToDo').on('open', ()=>{
    console.log('MongoDb connected');
}).on('error',()=>{
    console.log('MongoDb connection error');
});

module.exports = connection;
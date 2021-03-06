let mongoose = require('mongoose');
// var bcrypt = require('bcrypt');


//schema
let chatSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'unknow'
    },
    message: {
        type: String,
        require: true
    },
    createAt: {
        type: String,
        default : Date.now
    }
    
});


let Chat = module.exports = mongoose.model('Chat', chatSchema,'chat');

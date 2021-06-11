const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    name: {
        type: String,
        required: [true, '*Campo obrigatório!']
    },
    password: {
        type: String,
        required: [true, '*Campo obrigatório!']
    },
    role: {
        type: String,
        required: [true, '*Campo obrigatório!']
    }
});
const user = mongoose.model('user', User);
module.exports = user;
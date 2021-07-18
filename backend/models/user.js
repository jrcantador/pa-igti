const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    name: {
        type: String,
        required: [true, '* Campo obrigatório!']
    },    
    document: {
        type: String,
        required: [true, "* Campo obrigatório"]
    },
    address: {
        type: String,
    },
    postal_code: {
        type: String
    },
    city: {
        id: {
            type: Number,
        },
        name: {
            type: String,
        }
    },
    email: {
        type: String,
        required: [true, '* Campo obrigatório!']
    },
    password: {
        type: String,
        required: [true, '* Campo obrigatório!']
    },
    role: {
        type: String,
        required: [true, '* Campo obrigatório!'],
        default: 'user'
    }
});
const user = mongoose.model('User', User, 'user');
module.exports = user;
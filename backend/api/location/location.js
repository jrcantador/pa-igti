const restful = require('node-restful')
const mongoose = restful.mongoose

const locationSchema = new mongoose.Schema({
    name: { type: String, require: true },
    uf: { type: String, require: true },
    cep: { type: String }
});

module.exports = restful.model('location', locationSchema)
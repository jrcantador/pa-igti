const restful = require('node-restful')
const mongoose = restful.mongoose

const personSchema = new mongoose.Schema({
    name: { type: String, require: true },
    age: { type: Number, min: 0, max: 100 },
    birthDate: { type: Date, default: Date.now },
    genre: { type: String, enum: ['female', 'male'] },
    Address: { type: String },
    cellPhone: { type: String },
    email: { type: String },
    linkedin: { type: String },
    Facebook: { type: String },
    location: { type: String }
});

module.exports = restful.model('person', personSchema)
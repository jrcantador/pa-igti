const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  roles : {type : String, enum :['admin', 'normal'], default:['normal']}
});

module.exports = restful.model('User', userSchema);
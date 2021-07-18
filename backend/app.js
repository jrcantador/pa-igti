const express = require('express');
const routes = require('./routes/api');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
var cors = require('cors')
require("dotenv-safe").config();

app.use(cors())

let port = 5000;
app.use(bodyParser.json());
app.use('/api', routes);

app.use(function (err, req, res, next) {    
    res.status(422).send({ status: 422, message: err.message });
});
app.listen(process.env.port || port, () => {
    console.log('Servidor em execução no porta: ' + port);
});
app.get('/', function (req, res) {
    res.send('END POINT INVÁLIDO!');
});


var mongoDB = 'mongodb://localhost/cad';
mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



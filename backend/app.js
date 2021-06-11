const express = require('express');
const routes = require('./routes/api');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

let port = 5000;
app.use(bodyParser.json());
app.use('/api', routes);
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(422).send({ error: err.message });
});
app.listen(process.env.port || port, () => {
    console.log('Servidor em execução no porto: ' + port);
});
app.get('/', function (req, res) {
    res.send('END POINT INVÁLIDO!');
});
mongoose.connect('mongodb://localhost/cad');

mongoose.connection.on('connected', function () {
    console.log('Connected to Database ' + 'test');
});
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});


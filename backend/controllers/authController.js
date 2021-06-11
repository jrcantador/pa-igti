const User = require('../models/user');
const jwt = require('jsonwebtoken');


let authentication = function (req, res, next) {
    User.find({ name: req.body.name, password: req.body.password })
        .then(user => {
            if (user) {
                const id = user.id;
                const token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 300
                })
                res.json({ auth: true, token: token });
            }
            res.status(500).json({ message: 'Login inválido!' });
        }).catch(next);
};

module.exports = {authentication};
const User = require('../models/user');


let find = function (req, res, next) {
    User.find(req.query).then((user) => {
        res.send(user);
    }).catch(next);
};

let update = function (req, res, next) {
    let name = req.query.name;
    let role = req.query.role;
    User.find({ name: name, role: role }).then(pi => res.send(pi))
        .catch(next);
};

let remove = function (req, res, next) {
    User.findByIdAndRemove({ _id: req.params.id }).then((user) => {
        res.send(user);
    }).catch(next);
};

let create = function (req, res, next) {    
    User.create(req.body).then((user) => {
        res.send(user);
    }).catch(next);
};


module.exports = { find, update, remove, create };
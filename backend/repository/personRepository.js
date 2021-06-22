const Person = require('../models/person');

let find = (query) => {
    return Person.find(query);
};

let update = (id, body) => {
    return Person.findOneAndUpdate({ _id: id }, body);
};

let remove = (id) => {
    return Person.findByIdAndRemove({ _id: id });
};

let create = (body) => {
    return Person.create(body);
};


module.exports = { find, update, remove, create };
const personRepository = require('../repository/personRepository');

const create = (body) => {
    return personRepository.create(body);
}

const update = (id, body) => {
    return personRepository.update(id, body);
}

const remove = (id) => {
    return personRepository.remove(id);
}

const find = (query) => {
    return personRepository.find(query);

}

module.exports = { find, update, remove, create };
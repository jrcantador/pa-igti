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

const find = (filters, sortField, sortKey, skip, limit) => {
    return personRepository.find(filters, sortField, sortKey, skip, limit);

}

const count = (filters, orders) =>{
    return personRepository.count(filters, orders);
}

module.exports = { find, update, remove, create, count};
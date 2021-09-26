const Person = require("../models/person");

let find = (filters, sortField, sortKey, skip, limit) => {
  const sort = {};
  sort[sortField] = sortKey;
  console.log(sort);
  return Person.find(filters, null, { sort: sort, skip: skip, limit: limit });
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

let count = (body) => {
  return Person.countDocuments(body);
};

module.exports = { find, update, remove, create, count };

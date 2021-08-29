const personService = require("../services/personServices");

let find = function (req, res, next) {
  personService
    .find(req.query)
    .then((person) => {
      res.send(person);
    })
    .catch(next);
};

let update = function (req, res, next) {
  personService
    .update({ _id: req.params.id }, req.body)
    .then((person) => res.send(person))
    .catch(next);
};

let remove = function (req, res, next) {  
  personService
    .remove(req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

let create = function (req, res, next) {        
  personService
    .create(req.body)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

let dataTable = function (req, res, next) {  
  let find = {};
  if (req.body.search) {
    find["name"] = { $regex: ".*" + req.body.search + ".*" };
  }

  personService
    .find(find, req.body.sortedKey, req.body.sortedType)
    .then((people) => {
      let json = {
        data: people,
      };
      personService
        .count(find)
        .then((count) => {
          json["count"] = count;
          res.send(json);
        })
        .catch(next);
    })
    .catch(next);
};

let imageUpload = function (req, res, next) {
  const image = req.file;  
  console.log(req.file);
  personService
    .find({ _id: req.body.id })
    .then((data) => {      
      data[0].image_id = image.filename;
      const query = removeKey(data[0], '_id');      
      personService
        .update(req.body.id, query)
        .then((data) => {          
          res.json({ file: image });
        })
        .catch(next);
    })
    .catch(next);
};

const removeKey = (obj, propToDelete) => {
  const { [propToDelete]: deleted, ...objectWithoutDeletedProp } = obj;  
  return objectWithoutDeletedProp;
};

module.exports = { find, update, remove, create, imageUpload, dataTable };

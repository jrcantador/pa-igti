const personService = require("../services/personServices");
const fileHelper = require("../lib/file-helper");

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
    .remove({ _id: req.params.id })
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
  console.log(req.body);
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

let uploadImagem = function (req, res, next) {
  // Se houve sucesso no armazenamento
  if (req.file) {
    // Vamos mandar essa imagem para compressão antes de prosseguir
    // Ela vai retornar o a promise com o novo caminho como resultado, então continuamos com o then.
    fileHelper
      .compressImage(req.file, 100)
      .then((newPath) => {
        // Vamos continuar normalmente, exibindo o novo caminho
        return res.send(
          "Upload e compressão realizados com sucesso! O novo caminho é:" +
            newPath
        );
      })
      .catch((err) => console.log(err));
  }

  return res.send("Houve erro no upload!");
};

module.exports = { find, update, remove, create, uploadImagem, dataTable };

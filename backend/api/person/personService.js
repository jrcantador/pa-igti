const _ = require('lodash');
const person = require('./person');
const parseErrors = require('../lib/parseErrors');

//NodeRestfull
person.methods(['get', 'post', 'put', 'delete'])
person.updateOptions({ new: true, runValidators: true })

person.after('post', parseErrors.sendErrorsOrNext).after('put', parseErrors.sendErrorsOrNext)

person.route('count', function (req, res, next) {
  person.count(function (error, value) {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json({ value })
    }
  })
})

module.exports = person;

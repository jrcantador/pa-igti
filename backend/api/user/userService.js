const _ = require('lodash');
const user = require('./user');
const parseErrors = require('../lib/parseErrors');

user.methods(['get', 'post', 'put', 'delete'])
user.updateOptions({new: true, runValidators: true});

user.after('post', parseErrors.sendErrorsOrNext).after('put', parseErrors.sendErrorsOrNext)

user.route('count', function(req, res, next) {
  user.count(function(error, value) {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})

module.exports = user

const _ = require('lodash');
const location = require('./location');
const parseErrors = require('../lib/parseErrors');

//NodeRestfull
location.methods(['get', 'post', 'put', 'delete'])
location.updateOptions({ new: true, runValidators: true })

location.after('post', parseErrors.sendErrorsOrNext).after('put', parseErrors.sendErrorsOrNext)

location.route('count', function (req, res, next) {
    location.count(function (error, value) {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

module.exports = location;

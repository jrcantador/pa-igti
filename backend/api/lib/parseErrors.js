const _ = require('lodash');

function sendErrorsOrNext(req, res, next) {
    // bundle = Objeto que consta os erros e tudo que é persistido
    const bundle = res.locals.bundle;

    if (bundle.errors) {
        var errors = parseErrors(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next()
    }
}

function parseErrors(nodeRestfulErrors) {
    // .forIn = lodash
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

module.exports = sendErrorsOrNext;
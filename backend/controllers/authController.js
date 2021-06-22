const authService = require("../services/authenticationService")

let authentication = function (req, res, next) {    
    authService.authentication(req, res, next);
};

module.exports = {authentication};
const express = require('express');

module.exports = function(server) {

  // API Routes
  const router = express.Router();
  server.use('/api', router);

  // Users
  const usuario = require('../api/user/userService');
  usuario.register(router, '/users');
  // People
  const person = require('../api/person/personService');
  person.register(router, '/people');
  // Location
  const location = require('../api/location/locationService');
  location.register(router, '/locations');

}

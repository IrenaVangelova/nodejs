var express = require('express');
var router = express.Router();
const controller = require('../controller/countriesController');

router.get('/', controller.getAllCountries)
      .post('/', controller.getCountryCreate)
      .patch('/:id', controller.getCountryUpdate)
      .delete('/:id', controller.getCountryDeleted)

module.exports = router;
var express = require('express');
var router = express.Router();
const controller = require('../controllers/employees');

// MVC

router.get('/', controller.getEmployees)
      .get('/create', controller.getEmployeesCreate)
      .post('/create', controller.postCreateEmployee);

module.exports = router;


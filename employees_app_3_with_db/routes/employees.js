var express = require('express');
var router = express.Router();
const controller = require('../controller/employees-controller');

// CRUD operations: Create Read Update Delete

router.get('/', controller.getAllEmployees)
      .get('/:id', controller.getAllEmployeesWithId)
      .post('/', controller.getEmployeesCreate)
      .patch('/:id', controller.getEmployeesUpdate)
      .delete('/:id', controller.getEmployeesDeleted)

module.exports = router;

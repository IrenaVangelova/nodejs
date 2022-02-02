var express = require('express');
var router = express.Router();
const controller = require('../controller/company-controller');

// CRUD operations: Create Read Update Delete

router.get('/', controller.getAllCompanies)
      .post('/', controller.getCompanyCreate)
      .patch('/:id', controller.getCompanyUpdate)
      .delete('/:id', controller.getCompaniesDeleted)

module.exports = router;

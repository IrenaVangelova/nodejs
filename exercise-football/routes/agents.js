var express = require('express');
var router = express.Router();
const controller = require('../controller/agentsController');

router.get('/', controller.getAll)
      .post('/', controller.getCreate)
      .patch('/:id', controller.getUpdate)
      .delete('/:id', controller.getDeleted)

module.exports = router;
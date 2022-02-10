var express = require('express');
var router = express.Router();
const controller = require('../controller/playersController');

router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .get('/:id/update', controller.getUpdate)
      .post('/', controller.postCreate)
      .post('/:id/update', controller.postUpdate)
      .delete('/:id', controller.getDeleted)

module.exports = router;

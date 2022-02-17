var express = require('express');
var router = express.Router();
const controller = require('../controller/playersController');

router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .get('/:id', controller.getUpdate)
      .post('/', controller.postCreate)
      .post('/:id', controller.postUpdate)
      .delete('/:id', controller.getDeleted)

module.exports = router;

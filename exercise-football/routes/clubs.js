var express = require('express');
var router = express.Router();
const controller = require('../controller/clubsController');

router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .get('/:id/update', controller.getUpdate)
      .post('/', controller.postCreate)
      .post('/:id/update', controller.postUpdate)
      .get('/:id/delete', controller.getDeleted)

module.exports = router;

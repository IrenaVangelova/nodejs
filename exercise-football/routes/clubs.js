var express = require('express');
var router = express.Router();
const controller = require('../controller/clubsController');

router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .post('/', controller.postCreate)
      .patch('/:id/update', controller.getUpdate)
      .delete('/:id/delete', controller.getDeleted)

module.exports = router;

var express = require('express');
var router = express.Router();
const controller = require('../controller/clubsController');

router.get('/', controller.getAllClubs)
      .get('/:id', controller.getClubById)
      .post('/', controller.getClubCreate)
      .patch('/:id', controller.getClubUpdate)
      .delete('/:id', controller.getClubDeleted)

module.exports = router;

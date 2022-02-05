var express = require('express');
var router = express.Router();
const controller = require('../controller/clubs');

router.get('/', controller.getAllClubs)
      .post('/', controller.getClubCreate)
      .patch('/:id', controller.getClubUpdate)
      .delete('/:id', controller.getClubDeleted)

module.exports = router;

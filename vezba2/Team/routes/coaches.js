var express = require('express');
var router = express.Router();
const controller = require('../controller/coachesController');

router.get('/', controller.getAllCoaches)
      .post('/', controller.getCoachCreate)
      .patch('/:id', controller.getCoachUpdate)
      .delete('/:id', controller.getCoachDeleted)

module.exports = router;
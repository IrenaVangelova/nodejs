var express = require('express');
var router = express.Router();
const controller = require('../controller/players');

router.get('/', controller.getAllPlayers)
      .get('/:id', controller.getAllPlayersWithId)
      .post('/', controller.getPlayerCreate)
      .patch('/:id', controller.getPlayerUpdate)
      .delete('/:id', controller.getPlayerDeleted)

module.exports = router;

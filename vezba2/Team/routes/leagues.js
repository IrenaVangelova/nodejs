var express = require('express');
var router = express.Router();
const controller = require('../controller/leaguesController');

router.get('/', controller.getAllLeagues)
      .post('/', controller.getLeagueCreate)
      .patch('/:id', controller.getLeagueUpdate)
      .delete('/:id', controller.getLeagueDeleted)

module.exports = router;
var express = require('express');
var router = express.Router();
const controller = require('../controller/agentsController');

router.get('/', controller.getAllAgents)
      .post('/', controller.getAgentCreate)
      .patch('/:id', controller.getAgentUpdate)
      .delete('/:id', controller.getAgentDeleted)

module.exports = router;
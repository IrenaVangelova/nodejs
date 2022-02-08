const mongoose = require('mongoose');
const Agent = require('../models/agent')

const getAll = async (req, res) => {
  
    const agents = await Agent.find();
     
  res.send({
    error: false,
    message: `All agents from the database`,
    agents: agents
  });
};


const getCreate = async (req, res) => {
  // TODO: Create new employee
  const agent = await Agent.create(req.body);

  res.send({
    error: false,
    message: 'New agent has been created',
    agent: agent
  });
};

const getUpdate = async (req, res) => {
  await Agent.findByIdAndUpdate(req.params.id, req.body);
  const agent = await Agent.findById(req.params.id);

  res.send({
    error: false,
    message: `Agent with id #${agent._id} has been updated`,
    agent: agent
  });
};

const getDeleted = async (req, res) => {
  // TODO: Delete an employee
  await Agent.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Agent with id #${req.params.id} has been deleted`
  });
};



module.exports = { 
    getAll, 
    getCreate, 
    getUpdate, 
    getDeleted
}
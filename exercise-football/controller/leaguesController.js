const mongoose = require('mongoose');
const League = require('../models/league')

const getAll = async (req, res) => {
  
    const leagues = await League.find();
     
  res.send({
    error: false,
    message: `All leagues from the database`,
    leagues: leagues
  });
};

const getCreate = async (req, res) => {
  // TODO: Create new employee
  const league = await League.create(req.body);

  res.send({
    error: false,
    message: 'New league has been created',
    league: league
  });
};

const getUpdate = async (req, res) => {
  await League.findByIdAndUpdate(req.params.id, req.body);
  const league = await League.findById(req.params.id);

  res.send({
    error: false,
    message: `League with id #${league._id} has been updated`,
    league: league
  });
};

const getDeleted = async (req, res) => {
  // TODO: Delete an employee
  await League.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `League with id #${req.params.id} has been deleted`
  });
};



module.exports = { 
    getAll, 
    getCreate, 
    getUpdate, 
    getDeleted
}
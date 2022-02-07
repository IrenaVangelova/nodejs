const mongoose = require('mongoose');
const League = require('../models/league')

const getAllLeagues = async (req, res) => {
  
    const leagues = await League.find();
     
  res.send({
    error: false,
    message: `All leagues from the database`,
    leagues: leagues
  });
};


const getLeagueCreate = async (req, res) => {
  // TODO: Create new employee
  const league = await League.create(req.body);

  res.send({
    error: false,
    message: 'New player has been created',
    league: league
  });
};

const getLeagueUpdate = async (req, res) => {
  await League.findByIdAndUpdate(req.params.id, req.body);
  const league = await League.findById(req.params.id);

  res.send({
    error: false,
    message: `League with id #${league._id} has been updated`,
    league: league
  });
};

const getLeagueDeleted = async (req, res) => {
  // TODO: Delete an employee
  await League.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `League with id #${req.params.id} has been deleted`
  });
};



module.exports = { 
    getAllLeagues, 
    getLeagueCreate, 
    getLeagueUpdate, 
    getLeagueDeleted
}
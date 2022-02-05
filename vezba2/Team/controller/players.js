const mongoose = require('mongoose');
const Player = require('../models/player');

const getAllPlayers = async (req, res) => {
  
  const players = await Player.find();
     
  res.send({
    error: false,
    message: `All players from the database`,
    players: players
  });
};



const getAllPlayersWithId = async (req, res) => {
    // TODO: Return one employee by id
    const players = await Player.findById(req.params.id).populate('club', 'name')
                                                        
  
    res.send({
      error: false,
      message: `Player with id #${players._id}, has been fetched`,
      players: players,
      club: players.club,
    });
  };


const getPlayerCreate = async (req, res) => {
  // TODO: Create new employee
  const player = await Player.create(req.body);

  res.send({
    error: false,
    message: 'New player has been created',
    player: player
  });
};

const getPlayerUpdate = async (req, res) => {
  await Player.findByIdAndUpdate(req.params.id, req.body);
  const player = await Player.findById(req.params.id);

  res.send({
    error: false,
    message: `Player with id #${player._id} has been updated`,
    player: player
  });
};

const getPlayerDeleted = async (req, res) => {
  // TODO: Delete an employee
  await Player.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Player with id #${req.params.id} has been deleted`
  });
};



module.exports = { 
    getAllPlayers,
    getAllPlayersWithId, 
    getPlayerCreate, 
    getPlayerUpdate, 
    getPlayerDeleted
}
const mongoose = require('mongoose');
const Player = require('../models/player');

const getAll = async (req, res) => {
  
  const players = await Player.find();
     
  console.log(players);
  
  res.render('players/index', { players });
};


const getCreate = async (req, res) => {
  res.render('players/create');
};

const postCreate = async (req, res) => {
  console.log(req.body);
  await Player.create(req.body);

  res.redirect('/players');
};

const getUpdate = async (req, res) => {
  await Player.findByIdAndUpdate(req.params.id, req.body);
  const player = await Player.findById(req.params.id).populate('club', 'name');
                                                      
  res.send({
    error: false,
    message: `Player with id #${player._id} has been updated`,
    player: player

  });
};

const getDeleted = async (req, res) => {
  // TODO: Delete an employee
  await Player.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Player with id #${req.params.id} has been deleted`
  });
};



module.exports = { 
    getAll,
    postCreate, 
    getCreate, 
    getUpdate, 
    getDeleted
}
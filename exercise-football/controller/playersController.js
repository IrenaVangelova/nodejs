const mongoose = require('mongoose');
const Player = require('../models/player');

const getAll = async (req, res) => {
  
  const players = await Player.find();

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
  const player = await Player.findById(req.params.id);

  res.render('players/edit' , { player });
                                                      
};

const postUpdate = async (req, res) => {
  await Player.findByIdAndUpdate(req.params.id, req.body);
 
  res.redirect('/players');                                             
};

const getDeleted = async (req, res) => {
  await Player.findByIdAndDelete(req.params.id);

  res.redirect('/players');
};



module.exports = { 
    getAll,
    postCreate, 
    getCreate, 
    getUpdate,
    postUpdate, 
    getDeleted
}
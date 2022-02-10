const mongoose = require('mongoose');
const Player = require('../models/player');
const Club = require('../models/club');

const getAll = async (req, res) => {
  
  const players = await Player.find().populate('club');

  res.render('players/index', { players });
};

const getCreate = async (req, res) => {
  const clubs = await Club.find();

  res.render('players/create', { clubs });
};

const postCreate = async (req, res) => {

  if (req.body.club == '') {
    req.body.club = null;
  }

  await Player.create(req.body);

  res.redirect('/players');
};

const getUpdate = async (req, res) => {
  const player = await Player.findById(req.params.id);
  const clubs = await Club.find();

  res.render('players/edit' , { player, clubs });                                                  
};

const postUpdate = async (req, res) => {
  if (req.body.club == '') {
    req.body.club = null;
  }

  await Player.findByIdAndUpdate(req.params.id, req.body);
 
  res.redirect('/players');                                             
};

const getDeleted = async (req, res) => {
  await Player.findByIdAndDelete(req.params.id);

  res.send({});
};



module.exports = { 
    getAll,
    postCreate, 
    getCreate, 
    getUpdate,
    postUpdate, 
    getDeleted
}
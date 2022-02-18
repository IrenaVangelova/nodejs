const mongoose = require('mongoose');
const Player = require('../models/player');
const Club = require('../models/club');
const Agent = require('../models/agent');

const getAll = async (req, res) => {

  const players = await Player.find().populate('club', 'name').populate('agent');

  res.render('players/index', { players });
};

const getCreate = async (req, res) => {
  const clubs = await Club.find();
  const agents = await Agent.find();

  res.render('players/create', { clubs, agents });
};

const postCreate = async (req, res) => {

  if (req.body.club == '') {
    req.body.club = null;
  }

  const player = await Player.create(req.body);

  if (req.body.club) {
    await Club.findByIdAndUpdate(req.body.club, {
      $push: { players: player }
    });
  }

  if (req.body.agent) {
    await Agent.findByIdAndUpdate(req.body.agent, {
      $push: { players: player }
    });
  }

  res.redirect('/players');
};

const getUpdate = async (req, res) => {
  const player = await Player.findById(req.params.id).populate('club');
  const clubs = await Club.find();
  const agents = await Agent.find();

  res.render('players/edit', { player, clubs, agents });
};

const postUpdate = async (req, res) => {
  if (req.body.club == '') {
    req.body.club = null;
  }

  const player = await Player.findByIdAndUpdate(req.params.id, req.body);

  if (req.body.club) {

    let foundPlayers = await Club.find({ players: player });

    if (foundPlayers.length == 0) {
      await Club.findByIdAndUpdate(req.body.club, {
        $push: { players: player }
      });
    }
  }

  if (req.body.agent) {

    let foundPlayers = await Agent.find({ players: player });

    if (foundPlayers.length == 0) {
      await Agent.findByIdAndUpdate(req.body.agent, {
        $push: { players: player }
      });
    }
  }

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
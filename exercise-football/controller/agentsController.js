const mongoose = require('mongoose');
const Agent = require('../models/agent')

const getAll = async (req, res) => {

  const agents = await Agent.find();

  res.render('agents/index', { agents });
};


const getCreate = async (req, res) => {

  const agents = await Agent.find();

  res.render('agents/create', { agents });
};


const postCreate = async (req, res) => {

  await Agent.create(req.body);

  res.redirect('/agents');
};

const getUpdate = async (req, res) => {

  const agent = await Agent.findById(req.params.id);

  res.render('agents/edit', { agent });
};

const postUpdate = async (req, res) => {

  await Agent.findByIdAndUpdate(req.params.id, req.body);

  res.redirect('/agents');
};

const getDeleted = async (req, res) => {

  await Agent.findByIdAndDelete(req.params.id);

  res.send({});
};

const getView = async (req, res) => {
  const agent = await Agent.findById(req.params.id).populate('players');

  console.log(agent)
  res.render(`agents/view`, { agent });
};



module.exports = {
  getAll,
  getCreate,
  postCreate,
  getUpdate,
  postUpdate,
  getDeleted,
  getView
}
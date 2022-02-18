const mongoose = require('mongoose');
const Club = require('../models/club')


const getAll = async (req, res) => {

  const clubs = await Club.find();

  res.render('clubs/index', { clubs });
};

const getCreate = async (req, res) => {

  res.render('clubs/create');
};

const postCreate = async (req, res) => {
  console.log(req.body);
  await Club.create(req.body);

  res.redirect('/clubs');
};

const getUpdate = async (req, res) => {
  const club = await Club.findById(req.params.id);

  res.render(`clubs/edit`, { club });
};

const getView = async (req, res) => {
  const club = await Club.findById(req.params.id).populate('players');

  console.log(club)
  res.render(`clubs/view`, { club });
};

const postUpdate = async (req, res) => {
  await Club.findByIdAndUpdate(req.params.id, req.body);

  res.redirect(`/clubs`);
};

const getDeleted = async (req, res) => {
  await Club.findByIdAndDelete(req.params.id);

  res.status(200).send({});
};



module.exports = {
  getAll,
  postCreate,
  getCreate,
  getView,
  getUpdate,
  postUpdate,
  getDeleted
}
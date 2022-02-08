const mongoose = require('mongoose');
const Club = require('../models/club')


const getAll = async (req, res) => {
  
  const clubs = await Club.find();
   
  res.render('clubs/index', { clubs });
};

const getCreate = async (req, res) => {
  // TODO: Create new employee
  res.render('clubs/create');
};

const postCreate = async (req, res) => {
  console.log(req.body);
  await Club.create(req.body);

  res.redirect('/clubs');
};

const getUpdate = async (req, res) => {
  await Club.findByIdAndUpdate(req.params.id, req.body);
  const club = await Club.findById(req.params.id);

  res.redirect(`/clubs/${club_id}`);
};

const getDeleted = async (req, res) => {
  // TODO: Delete an employee
  await Club.findByIdAndDelete(req.params.id);

  res.redirect('/clubs');
};



module.exports = { 
    getAll, 
    postCreate,
    getCreate, 
    getUpdate, 
    getDeleted
}
const mongoose = require('mongoose');
const Club = require('../models/club')

const getAllClubs = async (req, res) => {
  
    const clubs = await Club.find();
     
  res.send({
    error: false,
    message: `All clubs from the database`,
    clubs: clubs
  });
};


const getClubCreate = async (req, res) => {
  // TODO: Create new employee
  const club = await Club.create(req.body);

  res.send({
    error: false,
    message: 'New player has been created',
    club: club
  });
};

const getClubUpdate = async (req, res) => {
  await Club.findByIdAndUpdate(req.params.id, req.body);
  const club = await Club.findById(req.params.id);

  res.send({
    error: false,
    message: `Player with id #${club._id} has been updated`,
    club: club
  });
};

const getClubDeleted = async (req, res) => {
  // TODO: Delete an employee
  await Player.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Club with id #${req.params.id} has been deleted`
  });
};



module.exports = { 
    getAllClubs, 
    getClubCreate, 
    getClubUpdate, 
    getClubDeleted
}
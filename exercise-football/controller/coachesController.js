const mongoose = require('mongoose');
const Coach = require('../models/coach')

const getAll = async (req, res) => {

  const coaches = await Coach.find();

  res.send({
    error: false,
    message: `All coaches from the database`,
    coaches: coaches
  });
};


const getCreate = async (req, res) => {
  // TODO: Create new employee
  const coach = await Coach.create(req.body);

  res.send({
    error: false,
    message: 'New coach has been created',
    coach: coach
  });
};

const getUpdate = async (req, res) => {
  await Coach.findByIdAndUpdate(req.params.id, req.body);
  const coach = await Coach.findById(req.params.id);

  res.send({
    error: false,
    message: `Coach with id #${coach._id} has been updated`,
    coach: coach
  });
};

const getDeleted = async (req, res) => {
  // TODO: Delete an employee
  await Coach.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Coach with id #${req.params.id} has been deleted`
  });
};



module.exports = {
  getAll,
  getCreate,
  getUpdate,
  getDeleted
}
const mongoose = require('mongoose');
const Country = require('../models/country')

const getAllCountries = async (req, res) => {
  
    const countries = await Country.find();
     
  res.send({
    error: false,
    message: `All countries from the database`,
    countries: countries
  });
};


const getCountryCreate = async (req, res) => {
  // TODO: Create new employee
  const country = await Country.create(req.body);

  res.send({
    error: false,
    message: 'New country has been created',
    country: country
  });
};

const getCountryUpdate = async (req, res) => {
  await Country.findByIdAndUpdate(req.params.id, req.body);
  const country = await Country.findById(req.params.id);

  res.send({
    error: false,
    message: `Player with id #${country._id} has been updated`,
    country: country
  });
};

const getCountryDeleted = async (req, res) => {
  // TODO: Delete an employee
  await Country.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Country with id #${req.params.id} has been deleted`
  });
};



module.exports = { 
    getAllCountries, 
    getCountryCreate, 
    getCountryUpdate, 
    getCountryDeleted
}
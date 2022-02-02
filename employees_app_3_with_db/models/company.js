const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    company_name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Company', companySchema);
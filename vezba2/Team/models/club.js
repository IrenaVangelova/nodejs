const mongoose = require('mongoose');

const clubSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    country: {
        ref: 'country',
        type: mongoose.Types.ObjectId
    },
    league: {
        ref: 'league',
        type: mongoose.Types.ObjectId
    },
  }, { timestamps: true });

  module.exports = mongoose.model('club', clubSchema);
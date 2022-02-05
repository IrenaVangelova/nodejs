const mongoose = require('mongoose');

const coachSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    club: {
        ref: 'club',
        type: mongoose.Types.ObjectId
    }
  }, { timestamps: true });

  module.exports = mongoose.model('coach', coachSchema);
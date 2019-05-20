const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
  userId: Number,
  isDeleted: {type: Boolean, default: false}
});

module.exports = mongoose.model('UserSession', UserSessionSchema)

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  _id: { type: mongoose.ObjectId },
  username: { type: String },
  password: { type: String }
})

module.exports = mongoose.model('User', UserSchema)
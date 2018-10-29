const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Day      = require('./day');
const Month    = require('./month');
const Year     = require ('./year');


const userSchema = new Schema({
  username: String,
  password: String,
  days: [{type: Schema.Types.ObjectId, ref: 'Day'}],
  months: [{type: Schema.Types.ObjectId, ref: 'Month'}],
  years: [{type: Schema.Types.ObjectId, ref: 'Year'}],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
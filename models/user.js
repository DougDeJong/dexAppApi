const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Day      = require('./day');
const Month    = require('./month');
const Year     = require ('./year');


const userSchema = new Schema({
  username: String,
  password: String,
});


module.exports = mongoose.model("User", userSchema);
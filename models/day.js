const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const daySchema = new Schema({
  sugars: Array,
  date: Date,
  userId: String,
  dayAverage: Number,
  hourAverages: Array,
  notes: String
});


module.exports = mongoose.model("Day", daySchema);
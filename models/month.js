const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const monthSchema = new Schema({
  name: String,
  monthAverage: Number,
  notes: String,
  bgValues: Array,
  userId: String,
  dailyAvg: Number,
  hourlyAverages: Array,
  yearId: String,
  notes: String
});


module.exports = mongoose.model("Month", monthSchema);
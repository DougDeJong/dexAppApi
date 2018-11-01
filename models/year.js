const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const yearSchema = new Schema({
  name: String,
  userId: String,
  yearlyAvg: Number,
  monthlhAvgBgValues: Array,
  notes: String
});

module.exports = mongoose.model("Year", yearSchema);
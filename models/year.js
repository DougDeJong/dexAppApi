const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const yearSchema = new Schema({
  date: Date,
  months: [{type: Schema.Types.ObjectId, ref: 'Month'}],
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  yearAverage: Number,
  notes: String
});

const Year = mongoose.model("Year", yearSchema);

module.exports = Year;
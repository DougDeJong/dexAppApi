const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const monthSchema = new Schema({
  date: Date,
  days: [{type: Schema.Types.ObjectId, ref: 'Day'}],
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  monthAverage: Number,
  notes: String
});

const Month = mongoose.model("Month", monthSchema);

module.exports = Month;
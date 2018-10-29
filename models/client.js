const mongoose = require('mongoose');


const clientSchema = new Schema({
  name: String, required: true,
  id: String, required: true,
  secret: String, required: true,
  userId: String, required: true,
})


module.exports = mongoose.model('Client', clientSchema)
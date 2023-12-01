const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople = new Schema({
  username: String,
  email: String,
  number: Number,
  description :String  
});

const USER = mongoose.model("feedback",uniquepeople) 

module.exports = USER;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_reset = new Schema({
  email: String,  
});

const RESET = mongoose.model("reset",uniquepeople_reset) 

module.exports = RESET;
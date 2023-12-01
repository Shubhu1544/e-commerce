const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_signup = new Schema({
  username: String,
  email: String,
  number :String,
  password :String,  
  confirm_password :String  
});

const SIGNUP = mongoose.model("signup",uniquepeople_signup) 

module.exports = SIGNUP;
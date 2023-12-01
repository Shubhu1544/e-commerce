const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_login = new Schema({
  email: String,
  password :String  
});

const LOGIN = mongoose.model("login",uniquepeople_login) 

module.exports = LOGIN;
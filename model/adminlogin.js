const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const admin_login = new Schema({
  username: String,
  password :String  
});

const adminlogin = mongoose.model("adminlogin",admin_login) 

module.exports = adminlogin;
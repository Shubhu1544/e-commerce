const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_bag = new Schema({
  product_name: String,
  price: String,
  description :String,
  product_images :String 
    
});

const bag = mongoose.model("bag",uniquepeople_bag) 

module.exports = bag;
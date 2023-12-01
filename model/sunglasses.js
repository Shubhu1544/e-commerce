const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_sunglasses = new Schema({
  product_name: String,
  price: String,
  description :String,
  product_images :String 
    
});

const sunglasses = mongoose.model("sunglasses",uniquepeople_sunglasses) 

module.exports = sunglasses;
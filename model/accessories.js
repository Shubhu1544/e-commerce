const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_accessories = new Schema({
  product_name: String,
  price: String,
  description :String,
  product_images :String 
    
});

const accessories = mongoose.model("accessories",uniquepeople_accessories) 

module.exports = accessories;
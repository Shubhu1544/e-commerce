const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_Perfumes = new Schema({
  product_name: String,
  price: String,
  description :String,
  product_images :String 
    
});

const Perfumes = mongoose.model("Perfumes",uniquepeople_Perfumes) 

module.exports = Perfumes;
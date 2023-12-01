const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_shoes = new Schema({
  product_name: String,
  price: String,
  description :String,
  product_images :String,
  // type: string
});

const shoes = mongoose.model("shoes",uniquepeople_shoes) 

module.exports = shoes;
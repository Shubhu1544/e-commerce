const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_bag = new Schema({
  product_bag: {type: mongoose.Schema.ObjectId, ref: 'bag'}
});

const bagcart = mongoose.model("bagcart",uniquepeople_bag) 

module.exports = bagcart;
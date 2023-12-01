const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_cart = new Schema({
  product: {type: mongoose.Schema.ObjectId, ref: 'watch'}
});

const cart = mongoose.model("cart",uniquepeople_cart) 

module.exports = cart;
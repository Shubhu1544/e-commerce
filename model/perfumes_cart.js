const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_Perfumes = new Schema({
  product_Perfumes: {type: mongoose.Schema.ObjectId, ref: 'Perfumes'}
});

const product_Perfumes = mongoose.model("product_Perfumes",uniquepeople_Perfumes) 

module.exports = product_Perfumes;
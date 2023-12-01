const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_sunglasses = new Schema({
    product_sunglasses: {type: mongoose.Schema.ObjectId, ref: 'sunglasses'}
});

const product_sunglasses = mongoose.model("product_sunglasses",uniquepeople_sunglasses) 

module.exports = product_sunglasses;








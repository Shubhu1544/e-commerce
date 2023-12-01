const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_Shoes = new Schema({
    product_Shoes: {type: mongoose.Schema.ObjectId, ref: 'shoes'}
});

const product_Shoes = mongoose.model("product_Shoes",uniquepeople_Shoes) 

module.exports = product_Shoes;




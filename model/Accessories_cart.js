const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_Accessories = new Schema({
    product_Accessories: {type: mongoose.Schema.ObjectId, ref: 'accessories'}
});

const product_Accessories = mongoose.model("product_Accessories",uniquepeople_Accessories) 

module.exports = product_Accessories;
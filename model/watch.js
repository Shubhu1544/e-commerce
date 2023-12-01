const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniquepeople_watch = new Schema({
  product_name: String,
  price: String,
  description :String,
  product_images :String 
    
});

const watch = mongoose.model("watch",uniquepeople_watch) 

module.exports = watch;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id:{type:String,required:true},
  imgSrc: { type: String, required: true },
  title: { type: String, required: true },
  price:{type:String, required:true},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
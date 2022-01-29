const mongoose = require('mongoose');
const { Schema } = mongoose;


const productsSchema = new Schema({
  name: {type: String, require: true, max:100},
  price: {type: Number, require: true, max: 1000000},
});

const productsModel = mongoose.model('products', productsSchema)

module.exports = productsModel
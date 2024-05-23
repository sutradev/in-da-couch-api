const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  category: String,
  description: String,
  image: String,
  price: Number,
  inStock: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  description: String,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

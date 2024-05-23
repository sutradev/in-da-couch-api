require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./product"); // adjust the path to your Note model

mongoose.connect(process.env.MONGODB_CONN);

async function clear() {
  try {
    await Product.deleteMany({});
    console.log("Products cleared");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
}

clear();

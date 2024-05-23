require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./product");
const Category = require("./category");

mongoose.connect(process.env.MONGODB_CONN);

async function seed() {
  const myProduct = new Product({
    name: "Bike",
    category: "Sports",
    description: "A two-wheeled vehicle",
    image: "https://images.unsplash.com/photo-1587671080922-9d9f8f1e6f1f",
    price: 1000,
    inStock: 10,
  });

  await myProduct.save();

  const myCategory = new Category({
    name: "Indica",
    description: "In Da Couch",
  });

  await myCategory.save();

  console.log("Mongoose db has been seeded");
  mongoose.disconnect();
}

seed();

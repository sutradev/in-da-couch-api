require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const {
  readProducts,
  postProduct,
  deleteProduct,
  updateProduct,
} = require("./handlers/productHandlers");

const {
  readCategories,
  postCategory,
  deleteCategory,
  updateCategory,
} = require("./handlers/categoryHandlers");

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_CONN);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Mongoose is connected"));

app.get("/products", readProducts);
app.post("/products", postProduct);
app.delete("/products/:id", deleteProduct);
app.put("/products/:id", updateProduct);

app.get("/categories", readCategories);
app.post("/categories", postCategory);
app.delete("/categories/:id", deleteCategory);
app.put("/categories/:id", updateCategory);

app.listen(PORT, () => console.log(`listening on ${PORT}`));

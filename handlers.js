const Product = require("./models/product");

async function readProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to find Notes");
  }
}

async function postProduct(request, response) {
  const { name: category, description, image, price, inStock } = request.body;
  try {
    const newProduct = await Product.create({
      name,
      category,
      description,
      image,
      price,
      inStock,
    });
    response.send(newProduct);
  } catch (error) {
    console.error(error);
    response.status(500).send("Error creating new Product");
  }
}

async function deleteProduct(request, response) {
  const id = request.params.id;

  try {
    await Product.findOneAndDelete({ _id: id });
    response.status(204).send("successfully deleted");
  } catch (error) {
    console.error(error);
    response.status(404).send(`Unable to delete product with id ${id}`);
  }
}

async function updateProduct(request, response) {
  const id = request.params.id;

  try {
    await Product.findOneAndUpdate({ _id: id }, request.body, {
      new: true,
    });
    response.status(200).send("successfully updated");
  } catch (error) {
    console.error(error);
    response.status(500).send(`Unable to update note with id ${id}`);
  }
}

module.exports = {
  readProducts,
  postProduct,
  deleteProduct,
  updateProduct,
};

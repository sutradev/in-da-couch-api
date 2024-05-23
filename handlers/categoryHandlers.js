const Category = require("../models/category");

async function readCategories(req, res) {
  try {
    const categories = await Category.find();
    res.status(200).send(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to find Categories");
  }
}

async function postCategory(request, response) {
  console.log("YO YOU HIT ME", request);
  const { name, description } = request.body;
  try {
    const newCategory = await Category.create({
      name,
      description,
    });
    response.send(newCategory);
  } catch (error) {
    console.error(error);
    response.status(500).send("Error creating new Category");
  }
}

async function deleteCategory(request, response) {
  const id = request.params.id;

  try {
    await Category.findOneAndDelete({ _id: id });
    response.status(204).send("successfully deleted");
  } catch (error) {
    console.error(error);
    response.status(404).send(`Unable to delete category with id ${id}`);
  }
}

async function updateCategory(request, response) {
  const id = request.params.id;

  try {
    await Category.findOneAndUpdate({ _id: id }, request.body, {
      new: true,
    });
    response.status(200).send("successfully updated");
  } catch (error) {
    console.error(error);
    response.status(500).send(`Unable to update category with id ${id}`);
  }
}

module.exports = {
  readCategories,
  postCategory,
  deleteCategory,
  updateCategory,
};

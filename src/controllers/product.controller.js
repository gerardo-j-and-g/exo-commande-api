const getProducts = async (req, res) => {
  res.send("Products");
};
const addProduct = async (req, res) => {
  res.send("Add product");
};
const updateProduct = async (req, res) => {
  res.send("Update product");
};

export const ProductController = {
  getProducts,
  addProduct,
  updateProduct,
};

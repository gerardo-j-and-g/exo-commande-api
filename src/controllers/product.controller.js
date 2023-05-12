import { CreateProductDTO } from "../dto/product/create-product.dto.js";
import { ProductDTO } from "../dto/product/product.dto.js";
import { Product } from "../models/product.model.js";

const getProducts = async (req, res) => {
  const products = (await Product.findAll()).map(
    (product) => new ProductDTO(product)
  );

  res.json(products);
};

const addProduct = async (req, res) => {
  const product = req.parsedData;

  const existingProduct = await Product.findOne({
    where: { name: product.name },
  });

  if (existingProduct) {
    return res.status(409).json({
      message: "Product already exists",
    });
  }

  if (!product.qty) {
    product.qty = 0;
  }

  const result = await Product.create(product);

  res.json(new CreateProductDTO(result));
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.parsedData;

  const existingProduct = await Product.findOne({
    where: { id },
  });

  if (!existingProduct) {
    return res.status(409).json({
      message: "Product does not exist",
    });
  }

  await Product.update(product, { where: { id } });

  res.status(200).json({
    message: "Product updated successfully",
  });
};

export const ProductController = {
  getProducts,
  addProduct,
  updateProduct,
};

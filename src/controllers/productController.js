import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

export const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

export const createProduct = asyncHandler(async (req, res) => {
  console.log("THE ROUTING ISSUE");
  const product = new Product({
    product_name: req.body.product_name,
    details: req.body.details,
    company: req.body.company,
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export const getProductById = asyncHandler(async (req, res) => {
  console.log("PRODUCT ID THROUGH PARAM", req.params.id);
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});
//works
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { name, details, company } = req.body;
  console.log("THE REQ", req.body);
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.details = details;
    product.company = company;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

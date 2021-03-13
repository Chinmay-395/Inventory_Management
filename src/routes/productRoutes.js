import express from "express";

const router = express.Router();

import {
  getProduct,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";

router.route("/").get(getProduct).post(createProduct);
router
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);

export default router;

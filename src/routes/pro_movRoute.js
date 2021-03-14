import express from "express";
const router = express.Router();

import {
  createProductMovement,
  getProductMov,
  getProdMovById,
  deleteProdMov,
  updateProdMov,
} from "../controllers/pro_movController.js";
console.log("ATLEAST I RAN");
router.route("/").get(getProductMov).post(createProductMovement);
router
  .route("/:id")
  .get(getProdMovById)
  .delete(deleteProdMov)
  .put(updateProdMov);

export default router;

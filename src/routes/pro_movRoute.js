import express from "express";
const router = express.Router();

import {
  createProductMovement,
  getProductMov,
} from "../controllers/pro_movController.js";
console.log("ATLEAST I RAN");
router.route("/").get(getProductMov).post(createProductMovement);

export default router;

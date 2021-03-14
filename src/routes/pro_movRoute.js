import express from "express";
const router = express.Router();

import { createProductMovement } from "../controllers/pro_movController.js";

router.route("/").post(createProductMovement);

export default router;

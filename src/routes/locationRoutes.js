import express from "express";
const router = express.Router();

import {
  getLocation,
  createLocation,
} from "../controllers/locationController.js";

router.route("/").get(getLocation).post(createLocation);

export default router;

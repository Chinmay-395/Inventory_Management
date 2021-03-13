import express from "express";
const router = express.Router();

import {
  getLocation,
  createLocation,
  getLocationById,
  deleteLocation,
  updateLocation,
} from "../controllers/locationController.js";

router.route("/").get(getLocation).post(createLocation);
router
  .route("/:id")
  .get(getLocationById)
  .delete(deleteLocation)
  .put(updateLocation);

export default router;

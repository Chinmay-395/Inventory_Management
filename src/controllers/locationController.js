import Location from "../models/locationModel";
import asyncHandler from "express-async-handler";
//works
export const getLocation = asyncHandler(async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
});
//works
export const createLocation = asyncHandler(async (req, res) => {
  console.log("ADDING NEW Location", res.body);
  var locObj = {
    location_id: req.body.location_id,
    name: req.body.name,
  };
  var newLoc = new Location(locObj);
  const createdLocation = await newLoc.save();

  res.status(200).json(createdLocation);
});
//works
export const getLocationById = asyncHandler(async (req, res) => {
  console.log("THE ID THROUGH PARAM", req.params.id);
  const location = await Location.findById(req.params.id);
  if (location) {
    res.json(location);
  } else {
    res.status(404);
    throw new Error("Location Not Found");
  }
});

export const deleteLocation = asyncHandler(async (req, res) => {
  const location = await Location.findById(req.params.id);
  if (location) {
    await location.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export const updateLocation = asyncHandler(async (req, res) => {
  console.log("THE REQ-BODY", req.body);
  const { location_id, name } = req.body;

  const location = await Location.findById(req.params.id);

  if (location) {
    location.name = name;
    location.location_id = location_id;

    const updatedLocation = await location.save();
    res.json(updatedLocation);
  } else {
    res.status(404);
    throw new Error("Location not found");
  }
});

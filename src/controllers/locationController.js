import Location from "../models/locationModel";
import asyncHandler from "express-async-handler";

export const getLocation = asyncHandler(async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
});

export const createLocation = asyncHandler(async (req, res) => {
  // const location = new Location({
  //   location_id: "loc_id_1",
  //   name: "Sample Location",
  // });
  // const createdLocation = await newLoc.save();
  console.log("ADDING NEW Location", res.body);
  var locObj = {
    location_id: req.body.location_id,
    name: req.body.name,
  };
  var newLoc = new Location(locObj);
  const createdLocation = await newLoc.save();

  res.status(200).json(createdLocation);
});

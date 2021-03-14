import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import ProductMovement from "../models/pro_movModel.js";

export const createProductMovement = asyncHandler(async (req, res) => {
  //check to see if the to-&-from location is same
  let to_location = req.body.to_location;
  let from_location = req.body.from_location;
  if (to_location === from_location) {
    res.status(400);
    res.json({ message: "The to & from location can't be same" });
  } else {
    //get everything from other collections
    const req_to_loc = await Location.findById(req.body.to_location);
    const req_from_loc = await Location.findById(req.body.from_location);
    const req_product = await Product.findById(req.body.product);
    console.log(
      `LETS GO ======> \n ${req_from_loc} \n ${req_to_loc} \n ${req_product}`
    );
    const product_movement = new ProductMovement({
      movement_id: req.body.movement_id,
      product: req_product,
      from_location: req_from_loc,
      to_location: req_to_loc,
      quantity: req.body.quantity,
    });
    const createProductMovement = await product_movement.create();
    res.status(201).json(createProductMovement);
  }
});

import asyncHandler from "express-async-handler";
import ProductMovement from "../models/pro_movModel.js";
import Location from "../models/locationModel.js";
import Product from "../models/productModel.js";
export const getProductMov = asyncHandler(async (req, res) => {
  // console.log("THE REQUEST", req);
  const prod_mov = await ProductMovement.find()
    .populate("product", "product_name")
    .populate("to_location", "location_name")
    .populate("from_location", "location_name");
  // console.log(
  //   "THE VAL",
  //   await ProductMovement.find()
  //     .populate("product", "product_name")
  //     .populate("to_location", "location_name")
  //     .populate("from_location", "location_name")
  // );
  // console.log(
  //   "THE RESP product",
  //   await Product.findById(prod_mov[0].product).select("product_name company")
  // );
  // console.log(
  //   "THE RESP product",
  //   await Location.findById(prod_mov[0].to_location).select("location_name")
  // );
  res.json(prod_mov);
});

export const createProductMovement = asyncHandler(async (req, res) => {
  console.log(
    "***************************************HELLO***************************************"
  );

  /**Validation to check whether to & from location arent same*/
  let to_location = req.body.to_location;
  let from_location = req.body.from_location;

  if (to_location === from_location) {
    res.status(400);
    res.json({ message: "The to & from location can't be same" });
  } else {
    //get everything from other collections
    const req_to_loc = await Location.findById(req.body.to_location);
    //req.body.from_location
    const req_from_loc = await Location.findById(req.body.from_location);
    //req.body.product
    const req_product = await Product.findById(req.body.product);
    // console.log(
    //   `LETS GO ======> \n ${req_from_loc} \n ${req_to_loc} \n ${req_product}`
    // );
    const product_movement = new ProductMovement({
      product: req_product,
      from_location: req_from_loc,
      to_location: req_to_loc,
      quantity: req.body.quantity,
    });

    const createProductMovement = await product_movement.save();
    res.status(201).json(createProductMovement);
  }
});

export const getProdMovById = asyncHandler(async (req, res) => {
  const prod_mov = await ProductMovement.findById(req.params.id);
  console.log("PRODUCT_MOVE", prod_mov);
  if (prod_mov) {
    res.json({
      id: prod_mov._id,
      product: await Product.findById(prod_mov.product).select(
        "product_name company"
      ),
      to_location: await Location.findById(prod_mov.to_location).select(
        "location_name"
      ),
      from_location: await Location.findById(prod_mov.from_location).select(
        "location_name"
      ),
      quantity: prod_mov.quantity,
    });
  } else {
    res.status(400);
    throw new Error("Product Not FOund");
  }
});

export const deleteProdMov = asyncHandler(async (req, res) => {
  const prod_mov = await ProductMovement.findById(req.params.id);
  if (prod_mov) {
    await prod_mov.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export const updateProdMov = asyncHandler(async (req, res) => {
  const { to_location, from_location, quantity } = req.body;
  const prod_mov = await ProductMovement.findById(req.params.id);
  console.log("THE TWO LOCATION", to_location);
  //the updated vals
  const updated_to_location = await Location.findById(to_location);
  const updated_from_location = await Location.findById(from_location);
  console.log("THE QUANTS", quantity);
  if (prod_mov) {
    prod_mov.to_location = updated_to_location;
    prod_mov.from_location = updated_from_location;
    prod_mov.quantity = quantity;
    const updatedProdMov = await prod_mov.save();
    res.json(updatedProdMov);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

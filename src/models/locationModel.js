import mongoose from "mongoose";

const locationSchema = mongoose.Schema({
  location_id: {
    type: String,
    unique: true,
    index: true,
    required: true,
  },
  name: {
    type: String,
    required: "Enter name of the location",
  },
});
const Product = mongoose.model("Location", locationSchema);
export default Product;

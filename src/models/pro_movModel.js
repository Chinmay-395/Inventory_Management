// Product-Movement Model
import mongoose from "mongoose";

const product_movementSchema = mongoose.Schema(
  {
    from_location: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Location",
    },
    to_location: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Location",
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Location", product_movementSchema);
export default Product;

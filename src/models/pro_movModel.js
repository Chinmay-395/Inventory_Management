// Product-Movement Model
import mongoose from "mongoose";

const product_movementSchema = mongoose.Schema(
  {
    movement_id: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },
    //takes an id field
    product: {
      type: mongoose.Schema.Types.ObjectID,
      required: true,
      ref: "Product",
    },
    //takes an id field
    from_location: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Location",
    },
    //takes an id field
    to_location: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Location",
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);
const ProductMovement = mongoose.model(
  "ProductMovement",
  product_movementSchema
);
export default ProductMovement;

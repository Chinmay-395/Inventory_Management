import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    product_id: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },
    name: {
      type: String,
      required: "Enter name of the product",
    },
    details: {
      type: String,
    },
    summary: {
      type: String,
      required: "Enter summary of the product",
    },
    company: {
      type: String,
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Location",
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);
export default Product;

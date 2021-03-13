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
      required: true,
      validate: {
        validator: (text) => {
          return text.length > 0;
        },
        message: "Empty Name is not allowed",
      },
    },
    details: {
      type: String,
    },
    summary: {
      type: String,
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

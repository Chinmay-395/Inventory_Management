import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    product_name: {
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
    company: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);
export default Product;

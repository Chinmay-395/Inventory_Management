import mongoose from "mongoose";

const locationSchema = mongoose.Schema({
  location_name: {
    type: String,
    // required: true,
    unique: true,
    validate: {
      validator: (text) => {
        return text.length > 0;
      },
      message: "Empty Name is not allowed",
    },
  },
});
const Location = mongoose.model("Location", locationSchema);
export default Location;

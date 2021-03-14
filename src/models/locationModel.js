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
    required: true,
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

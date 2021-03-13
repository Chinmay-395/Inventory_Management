// Inventory Management App
import express from "express";
import mongoose from "mongoose";
// import bodyParser from "body-parser";
/**MODELS */
import Location from "./src/models/locationModel.js";
/**ROUTES */
// import productRoutes from "./src/routes/productRoutes";
import locationRoutes from "./src/routes/locationRoutes.js";
// import pro_movRoutes from "./src/routes/pro_movRoutes";

const app = express();
const PORT = 4000;

// mongoose connection
//DB_NAME: Inventory
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Inventory", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  autoIndex: true,
});

// bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// connecting my routes
// app.use("/product", productRoutes);
app.use("/location", locationRoutes);
// app.use("/pro_mov", pro_movRoutes);

// serving static files
app.use(express.static("public"));

// Writing the post request
app.post("/addLocation", (req, res) => {
  console.log("ADDING NEW USER");
  var locObj = {
    location_id: req.body.location_id,
    name: req.body.name,
  };
  var newLoc = new Location(locObj);
  newLoc.save((err, location) => {
    if (err) {
      res.status(404).send("There is an error while adding new location");
    } else {
      res.status(200).json(location);
    }
  });
});

// default api endpoint
app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

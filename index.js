// Inventory Management App
import express from "express";
import mongoose from "mongoose";
var cors = require("cors");
// import bodyParser from "body-parser";
/**MODELS */
// import Location from "./src/models/locationModel.js";
/**ROUTES */
import productRoutes from "./src/routes/productRoutes";
import locationRoutes from "./src/routes/locationRoutes.js";
import pro_movRoutes from "./src/routes/pro_movRoute.js";

const app = express();
const PORT = 4000;

// mongoose connection
//DB_NAME: Inventory
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Inventory", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

// bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// connecting my routes
app.use("/product", productRoutes);
app.use("/api/promov", pro_movRoutes);
app.use("/location", locationRoutes);

// serving static files
app.use(express.static("public"));

// default api endpoint
app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

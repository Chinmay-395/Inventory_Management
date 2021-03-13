// Inventory Management App
import express from "express";
import mongoose from "mongoose";
// import bodyParser from "body-parser";
/**ROUTES */
import productRoutes from "./src/routes/productRoutes";
import locationRoutes from "./src/routes/locationRoutes";
import pro_movRoutes from "./src/routes/pro_movRoutes";

const app = express();
const PORT = 4000;

// mongoose connection
//DB_NAME: Inventory
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Inventory", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// connecting my routes
app.use("/product", productRoutes);
app.use("/location", locationRoutes);
app.use("/pro_mov", pro_movRoutes);

// serving static files
app.use(express.static("public"));
// default api endpoint
app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

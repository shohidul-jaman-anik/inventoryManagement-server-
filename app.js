const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Route
const productRoute = require('./routes/product.route')
const brandRoute=require('./routes/brand.route')


app.use('/api/v1/products', productRoute)
app.use('/api/v1/brand',brandRoute)


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;


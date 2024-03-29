const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Route
const productRoute = require('./routes/product.route')
const brandRoute = require('./routes/brand.route')
const storeRoute = require('./routes/store.route')
const categoryRoute = require('./routes/category.route')
const supplierRoute = require('./routes/supplier.route')
const stockRoute = require('./routes/stock.route')


app.use('/api/v1/products', productRoute)
app.use('/api/v1/brand', brandRoute)
app.use('/api/v1/store', storeRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/supplier', supplierRoute)
app.use('/api/v1/stock', stockRoute)


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
